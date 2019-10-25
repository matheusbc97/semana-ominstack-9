const express = require('express');
const SessionController = require('./controllers/SessionController')
const SpotsController = require('./controllers/SpotController')

const routes = express();

routes.use(express.json())

routes.post('/sessions', SessionController.store)

routes.post('/spots', SpotsController.store)

module.exports = routes