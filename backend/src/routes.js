const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotsController = require('./controllers/SpotController')
const DashboarController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express();
const upload = multer(uploadConfig)

routes.use(express.json())

routes.post('/sessions', SessionController.store)

routes.post('/spots', upload.single('thumbnail'), SpotsController.store)
routes.get('/spots', SpotsController.index)

routes.get('/dashboard', DashboarController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes