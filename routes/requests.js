const express = require('express');
const RequestsService = require('../services/requests');
const auth = require('../utils/middleware/auth');
const boom = require('@hapi/boom');

function requestsApi(app) {
  const router = express.Router();
  const requestsService = new RequestsService();

  app.use('/api/requests', router);

  router.get('/', auth, async (req, res) => {
    const requests = await requestsService.getRequests({
      curp: req.usuario.id,
    });

    res.json({
      data: requests,
      message: 'Requests listed',
    });
  });
  router.get('/all', auth, async (req, res) => {
    const requests = await requestsService.getRequests();

    res.json({
      data: requests,
      message: 'Requests listed',
    });
  });
  router.get('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const request = await requestsService.getRequest(id);

    res.json({
      data: request,
      message: 'Request retrieved',
    });
  });
  router.post('/', auth, async (req, res, next) => {
    const request = req.body;

    const requestCreated = await requestsService.createRequest(
      request,
      req.usuario.id
    );
    if (requestCreated.solicitudIdRechazada) {
      await requestsService.deleteRequest(requestCreated.solicitudIdRechazada);
      return next(boom.internal('Hubo un error'));
    }

    res.json({
      data: requestCreated,
      message: 'Request created',
    });
  });
  router.put('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const request = req.body;

    const requestUpdated = await requestsService.updateRequest(id, request);

    res.json({
      data: requestUpdated,
      message: 'Request Updated',
    });
  });
  router.delete('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const requestDeleted = await requestsService.deleteRequest(id);
    res.json({
      data: requestDeleted,
      message: 'Request deleted',
    });
  });
}

module.exports = requestsApi;
