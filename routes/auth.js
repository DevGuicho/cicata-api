const express = require('express');
const boom = require('@hapi/boom');
const UsersService = require('../services/users');
const bcrypt = require('bcryptjs');
const { config } = require('../config');
const jwt = require('jsonwebtoken');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);
  const usersServices = new UsersService();

  router.post('/logup', async (req, res, next) => {
    const usuario = req.body;
    let user = await usersServices.getUserByEmail(usuario.email);

    if (Object.keys(user).length > 0)
      return next(boom.notAcceptable('El usuario ya es esta registrado'));
    user = await usersServices.getUser(usuario.curp);
    if (Object.keys(user).length > 0)
      return next(boom.notAcceptable('El persona fisica ya registrada'));

    const userCreated = await usersServices.createUser(usuario);
    const payload = {
      usuario: { id: userCreated },
    };
    const token = jwt.sign(payload, config.authJwtSecret, {
      expiresIn: '60m',
    });

    res.json({
      data: userCreated,
      token,
      message: 'User created',
    });
  });

  router.post('/login', async (req, res, next) => {
    const usuario = req.body;

    const user = await usersServices.getUserByEmail(usuario.email);
    if (Object.keys(user).length === 0)
      return next(boom.unauthorized('El usuario no existe'));
    const passCorrecto = await bcrypt.compare(
      usuario.password,
      user.UsuarioLogin.password
    );
    if (!passCorrecto) return next(boom.unauthorized('Password incorrecto'));

    const payload = {
      usuario: { id: user.curp },
    };
    const token = jwt.sign(payload, config.authJwtSecret, {
      expiresIn: '60m',
    });

    res.json({
      data: { user, token },
      message: 'user created',
    });
  });
}

module.exports = authApi;
