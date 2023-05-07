const express = require('express');

const { Infocontroller } = require('../../controllers');

const router = express.Router();

router.get('/info', Infocontroller.info);
module.exports = router;
 