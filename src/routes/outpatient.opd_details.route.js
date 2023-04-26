const express = require('express');
const router = express.Router();

const outPatientOpdDetailsController = require('../controllers/outpatient.opd_details.controller');





//get patients Opd Details overview

router.get('/',outPatientOpdDetailsController.getOpdDetailsOverview);



module.exports = router;