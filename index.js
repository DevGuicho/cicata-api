const express = require('express');
const debug = require('debug')('app:server');
const cors = require('cors');
const app = express();
const { config } = require('./config');
const { sequelize } = require('./database/');

const productsApi = require('./routes/products');
const requestsApi = require('./routes/requests');
const usersApi = require('./routes/users');

const notFounHandler = require('./utils/middleware/notFoundHandler');
const authApi = require('./routes/auth');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandler');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

productsApi(app);
requestsApi(app);
usersApi(app);
authApi(app);

// Catch 404
app.use(notFounHandler);

//Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

sequelize.sync().then(() => {
  debug('Tablas creadas');
});

app.listen(config.port, () => debug(`Server on port ${config.port}`));
