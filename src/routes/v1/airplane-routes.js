const express = require('express');
const { Airplanecontroller } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();


// /api/v1/airplanes  POST request
router.post('/', AirplaneMiddlewares.validateCreateRequest, Airplanecontroller.createAirplane);

module.exports = router;
