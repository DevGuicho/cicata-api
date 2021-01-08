const Doctorado = require('../models/Doctorado');
const Maestria = require('../models/Maestria');
const Solicitud = require('../models/Solicitud');

class RequestsService {
  constructor() {}

  async getRequests(query) {
    const requests = await Solicitud.findAll({
      include: [Doctorado, Maestria],
      where: query,
    });
    const requestFiltrado = requests.map((request) => {
      if (request.Doctorado === null) {
        delete request.dataValues.Doctorado;
      }
      if (request.Maestrium === null) {
        delete request.dataValues.Maestrium;
      }
      return request;
    });
    return requestFiltrado || [];
  }
  async getRequest(id) {
    const request = await Solicitud.findOne({
      include: [Doctorado, Maestria],
      where: { id },
    });

    if (request.Doctorado === null) {
      delete request.dataValues.Doctorado;
    }
    if (request.Maestrium === null) {
      delete request.dataValues.Maestrium;
    }
    return request || [];
  }
  async createRequest(request, curp) {
    const requestCreated = await Solicitud.create({
      ...request,
      curp,
    });
    const { maestria, doctorado } = request;
    if (request.maestria) {
      await Maestria.create({
        ...maestria,
        solicitudId: requestCreated.dataValues.id,
      });
    } else if (request.doctorado) {
      await Doctorado.create({
        ...doctorado,
        solicitudId: requestCreated.dataValues.id,
      });
    } else {
      return { solicitudIdRechazada: requestCreated.dataValues.id };
    }
    return requestCreated;
  }
  async updateRequest(id, request) {
    const { maestria, doctorado } = request;
    const requestUpdated = await Solicitud.update(request, {
      where: {
        id,
      },
    });
    if (request.maestria) {
      await Maestria.update(maestria, {
        where: { solicitudId: id },
      });
    } else if (request.doctorado) {
      await Doctorado.update(doctorado, {
        where: { solicitudId: id },
      });
    }

    return requestUpdated || {};
  }
  async deleteRequest(id) {
    const requestDeleted = await Solicitud.destroy({
      where: {
        id,
      },
    });
    return requestDeleted || [];
  }
}

module.exports = RequestsService;
