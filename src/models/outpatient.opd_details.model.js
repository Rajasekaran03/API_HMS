var dbCon = require('../../config/db.config');

var PatientOpdDetails = function(patientopddetails) {
this.case_reference_id = patientopddetails.case_reference_id;
this.patient_id = patientopddetails.patient_id;
this.generated_by = patientopddetails.generated_by;
this.is_ipd_moved = patientopddetails.is_ipd_moved;
this.discharged = patientopddetails.discharged;
this.created_at = patientopddetails.created_at;
}



    //get patients Opd Details overview

    PatientOpdDetails.getOpdDetailsOverview = (result) => {
dbCon.query('SELECT * FROM opd_details',(err,res)=>{
if(err){
    console.log('Error while fetching patients opd_details',err);
    result(null,err);
}
else{
    console.log('Patients opd_details fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientOpdDetails;