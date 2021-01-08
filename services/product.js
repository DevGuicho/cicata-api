const {
  Producto,
  artCongreso,
  artRevista,
  capLibro,
  Libro,
  Desarrollo,
} = require('../models/Producto');

class ProductsService {
  constructor() {}
  async getProducts(query) {
    /* const products = await Promise.resolve(productMock); */
    const products = await Producto.findAll({
      where: query,
      include: [artCongreso, artRevista, capLibro, Libro, Desarrollo],
    });
    const productsFilter = products.map((product) => {
      if (product.artCongreso) {
        delete product.dataValues.artRevistum;
        delete product.dataValues.capLibro;
        delete product.dataValues.Libro;
        delete product.dataValues.Desarrollo;
      } else if (product.artRevistum) {
        delete product.dataValues.artCongreso;
        delete product.dataValues.capLibro;
        delete product.dataValues.Libro;
        delete product.dataValues.Desarrollo;
      } else if (product.capLibro) {
        delete product.dataValues.artCongreso;
        delete product.dataValues.artRevistum;
        delete product.dataValues.Libro;
        delete product.dataValues.Desarrollo;
      } else if (product.Libro) {
        delete product.dataValues.artCongreso;
        delete product.dataValues.artRevistum;
        delete product.dataValues.capLibro;
        delete product.dataValues.Desarrollo;
      } else if (product.Desarrollo) {
        delete product.dataValues.artCongreso;
        delete product.dataValues.artRevistum;
        delete product.dataValues.capLibro;
        delete product.dataValues.Libro;
      }
      return product;
    });
    return productsFilter || [];
  }
  async getProduct(id) {
    const product = await Producto.findOne({
      where: { id },
      include: [artCongreso, artRevista, capLibro, Libro, Desarrollo],
    });
    if (product.artCongreso) {
      delete product.dataValues.artRevistum;
      delete product.dataValues.capLibro;
      delete product.dataValues.Libro;
      delete product.dataValues.Desarrollo;
    } else if (product.artRevistum) {
      delete product.dataValues.artCongreso;
      delete product.dataValues.capLibro;
      delete product.dataValues.Libro;
      delete product.dataValues.Desarrollo;
    } else if (product.capLibro) {
      delete product.dataValues.artCongreso;
      delete product.dataValues.artRevistum;
      delete product.dataValues.Libro;
      delete product.dataValues.Desarrollo;
    } else if (product.Libro) {
      delete product.dataValues.artCongreso;
      delete product.dataValues.artRevistum;
      delete product.dataValues.capLibro;
      delete product.dataValues.Desarrollo;
    } else if (product.Desarrollo) {
      delete product.dataValues.artCongreso;
      delete product.dataValues.artRevistum;
      delete product.dataValues.capLibro;
      delete product.dataValues.Libro;
    }
    return product || {};
  }
  async createProduct(curp, product) {
    const productCreated = await Producto.create({ ...product, curp });
    if (product.congreso) {
      await artCongreso.create({
        ...product.congreso,
        ProductoId: productCreated.dataValues.id,
      });
    } else if (product.revista) {
      await artRevista.create({
        ...product.revista,
        ProductoId: productCreated.dataValues.id,
      });
    } else if (product.type === 'capituloLibro') {
      await capLibro.create({
        ...product.libro,
        ProductoId: productCreated.dataValues.id,
      });
    } else if (product.type === 'Libro') {
      await Libro.create({
        ...product.libro,
        ProductoId: productCreated.dataValues.id,
      });
    } else if (product.desarrollo) {
      await Desarrollo.create({
        ...product.desarrollo,
        ProductoId: productCreated.dataValues.id,
      });
    }
    return productCreated || {};
  }
  async updateProduct(id, product) {
    const productUpdated = await Producto.update(product, {
      where: {
        id,
      },
    });
    if (product.congreso) {
      await artCongreso.update(
        {
          ...product.congreso,
        },
        {
          where: {
            ProductoId: id,
          },
        }
      );
    } else if (product.revista) {
      await artRevista.create(
        {
          ...product.revista,
        },
        {
          where: {
            ProductoId: id,
          },
        }
      );
    } else if (product.type === 'capituloLibro') {
      await capLibro.create(
        {
          ...product.libro,
        },
        {
          where: {
            ProductoId: id,
          },
        }
      );
    } else if (product.type === 'Libro') {
      await Libro.create(
        {
          ...product.libro,
        },
        {
          where: {
            ProductoId: id,
          },
        }
      );
    } else if (product.desarrollo) {
      await Desarrollo.create(
        {
          ...product.desarrollo,
        },
        {
          where: {
            ProductoId: id,
          },
        }
      );
    }

    return productUpdated || {};
  }
  async deleteProduct(id) {
    const productDeleted = await Producto.destroy({ where: { id } });
    return productDeleted || 0;
  }
}

module.exports = ProductsService;
