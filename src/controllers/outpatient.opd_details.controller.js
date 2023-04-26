const OutPatientOpdDetailsModel = require('../models/outpatient.opd_details.model');




//get patients Opd Details overview

exports.getOpdDetailsOverview = (req,res)=>{
    //console.log('Here all patients list');
    OutPatientOpdDetailsModel.getOpdDetailsOverview((err,patients)=>{
     console.log('We are here');
     if(err)
         res.send(err);
         console.log('Patients',patients)
         res.send(patients);
     
    })
 }