var dbCon = require('../../config/db.config');

var PatientOperations = function(patientoperations) {
this.opd_details_id = patientoperations.opd_details_id;
this.ipd_details_id = patientoperations.ipd_details_id;
this.customer_type = patientoperations.customer_type;
this.operation_id = patientoperations.operation_id;
this.date = patientoperations.date;
this.operation_type = patientoperations.operation_type;
this.consultant_doctor = patientoperations.consultant_doctor;
this.ass_consultant_1 = patientoperations.ass_consultant_1;
this.ass_consultant_2 = patientoperations.ass_consultant_2;
this.anesthetist = patientoperations.anesthetist;
this.anaethesia_type = patientoperations.anaethesia_type;
this.ot_technician = patientoperations.ot_technician;
this.ot_assistant = patientoperations.ot_assistant;
this.result = patientoperations.result;
this.remark = patientoperations.remark;
this.generated_by = patientoperations.generated_by;
this.created_at = patientoperations.created_at;
}




//Add new operations

PatientOperations.createPatientOperations = (patientReqData,result) =>{
    dbCon.query('INSERT INTO operation_theatre SET ?',patientReqData,(err,res)=>{
    if(err){
        console.log('Error while inserting data');
        console.log(err);
        result(null,err);
    }
    else{
        console.log('Patient operations created successfully')
        result(null,res);
    }
    })
    }


    //get all patients operations list

    PatientOperations.getAllOutPatientOperations = (result) => {
dbCon.query('SELECT * FROM operation_theatre',(err,res)=>{
if(err){
    console.log('Error while fetching patient operation',err);
    result(null,err);
}
else{
    console.log('Patient operation fetched successfully');
    result(null,res);
}
});
}



module.exports = PatientOperations;