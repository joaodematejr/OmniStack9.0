const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const StotController = require('./controllers/StotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single('thumbnail'), StotController.store);

routes.get("/dashboard", DashboardController.show);

routes.get("/spots", StotController.index);

routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
