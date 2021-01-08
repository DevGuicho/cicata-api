const usersMock = require('../utils/mocks/users');
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
    const {
      curp,
      nombre,
      apellidos,
      email,
      tipoUsuario,
      password,
      pregunta1,
      pregunta2,
      respuesta1,
      respuesta2,
      alumno,
      profesor,
    } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await UsuarioDG.create({
        curp,
        nombre,
        apellidos,
        email,
        tipoUsuario,
      });
      await UsuarioLogin.create({
        password: hashedPassword,
        pregunta1,
        pregunta2,
        respuesta1,
        respuesta2,
        curp,
      });
      if (tipoUsuario === 'alumno') {
        await Alumno.create({
          ...alumno,
          curp,
        });
      } else if (tipoUsuario === 'profesor') {
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
  async updateUser(id, user) {
    const userUpdated = await Promise.resolve(usersMock[0]);
    return userUpdated || {};
  }
  async deleteUser(id) {
    /* const userDeleted = await Promise.resolve(usersMock[0]); */
    const userDeleted = await UsuarioDG.destroy({ where: { curp: id } });
    return userDeleted || 0;
  }
}

module.exports = UsersService;
