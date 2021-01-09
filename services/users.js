const UsuarioDG = require('../models/UsuarioDG');
const UsuarioLogin = require('../models/UsuarioLogin');
const Alumno = require('../models/Alumno');
const bcrypt = require('bcryptjs');
const Profesor = require('../models/Profesor');

class UsersService {
  constructor() {}
  async getUsers(query) {
    const usuario = await UsuarioDG.findAll({
      where: query,
      include: [UsuarioLogin, Alumno, Profesor],
    });
    const usuarioFiltrado = usuario.map((user) => {
      if (user.alumno === null) {
        delete user.dataValues.alumno;
      }
      if (user.profesor === null) {
        delete user.dataValues.profesor;
      }
      return user;
    });
    return usuarioFiltrado || [];
  }
  async getUser(curp) {
    const usuarioDG = await UsuarioDG.findOne({
      where: { curp },
      include: [UsuarioLogin, Alumno, Profesor],
    });
    if (!usuarioDG) return {};
    if (usuarioDG.alumno === null) {
      delete usuarioDG.dataValues.alumno;
    }
    if (usuarioDG.profesor === null) {
      delete usuarioDG.dataValues.profesor;
    }

    return usuarioDG || {};
  }
  async getUserByEmail(email) {
    const usuarioDG = await UsuarioDG.findOne({
      where: { email },
      include: UsuarioLogin,
    });

    return usuarioDG || {};
  }
  async createUser(user) {
    const { password, tipoUsuario, alumno, profesor, curp } = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await UsuarioDG.create({
        ...user,
      });
      await UsuarioLogin.create({
        ...user,
        password: hashedPassword,
      });
      if (tipoUsuario === 'Alumno') {
        await Alumno.create({
          ...alumno,
          curp,
        });
      } else if (tipoUsuario === 'Profesor') {
        await Profesor.create({
          ...profesor,
          curp,
        });
      }
      return user.curp || {};
    } catch (error) {
      return {};
    }
  }
  async updateUser(curp, user) {
    const { password, alumno, profesor } = user;
    if (password !== null) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await UsuarioLogin.update(
        {
          ...user,
          password: hashedPassword,
        },
        {
          where: {
            curp,
          },
        }
      );
    } else {
      await UsuarioLogin.update(
        {
          ...user,
        },
        {
          where: {
            curp,
          },
        }
      );
    }

    const userUpdated = await UsuarioDG.update(
      {
        ...user,
      },
      {
        where: {
          curp,
        },
      }
    );

    if (user.alumno) {
      await Alumno.update(
        {
          ...alumno,
        },
        {
          where: {
            curp,
          },
        }
      );
    } else if (user.profesor) {
      await Profesor.update(
        {
          ...profesor,
        },
        {
          where: {
            curp,
          },
        }
      );
    }
    return userUpdated || {};
  }
  async deleteUser(id) {
    const userDeleted = await UsuarioDG.destroy({ where: { curp: id } });
    return userDeleted || 0;
  }
}

module.exports = UsersService;
