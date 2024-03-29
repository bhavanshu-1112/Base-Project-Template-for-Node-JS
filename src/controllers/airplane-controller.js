const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse} = require('../utils/common');

//const { response } = require('express');

// how a createAirplane api loook like ;
/*
   POST : /airplanes
   req-body {modelNumber : 'airbus 320', capacity:  200}
   
*/
async function createAirplane(req, res){
   try {
     const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
     });
     SuccessResponse.data = airplane;
      return res
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);
   } catch (error) {
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
   }
}
module.exports = {
    createAirplane
}