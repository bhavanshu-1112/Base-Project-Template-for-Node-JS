const express = require('express');

const { Infocontroller } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');

const router = express.Router();


router.use('/airplanes', airplaneRoutes);

router.get('/info', Infocontroller.info);

module.exports = router;
 