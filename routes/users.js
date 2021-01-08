const express = require('express');
const UsersService = require('../services/users');

const auth = require('../utils/middleware/auth');

function usersApi(app) {
  const router = express.Router();
  const usersSerivice = new UsersService();

  app.use('/api/users', auth, router);

  router.get('/', auth, async (req, res) => {
    const users = await usersSerivice.getUsers();

    res.json({
      data: users,
      message: 'Users listed',
    });
  });
  router.get('/:curp', auth, async (req, res) => {
    const { curp } = req.params;
    const user = await usersSerivice.getUser(curp);

    res.json({
      data: user,
      message: 'User retrieved',
    });
  });
  router.post('/', async (req, res) => {
    const usuario = req.body;

    const userCreated = await usersSerivice.createUser(usuario);

    res.json({
      data: userCreated,
      message: 'User created',
    });
  });
  router.put('/:id', async (req, res) => {
    const user = req.body;
    const { id } = req.params;

    const userUpdated = await usersSerivice.updateUser(id, user);

    res.json({
      data: userUpdated,
      message: 'User updated',
    });
  });
  router.delete('/:id', auth, async (req, res) => {
    const { id } = req.params;

    const userDeleted = await usersSerivice.deleteUser(id);

    res.json({
      data: userDeleted,
      message: 'User deleted',
    });
  });
}

module.exports = usersApi;
