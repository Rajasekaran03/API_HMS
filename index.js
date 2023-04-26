const express = require('express');
const bodyParser = require('body-parser');

//create the express app

const app = express();

//setup the server port

const port = process.env.PORT || 5000;

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse request data content type application/json
app.use(bodyParser.json());

//define the root route

app.get('/',(req,res)=>{
res.send('Hello World');
});

//import patient routes

const leave_type_route = require('./src/routes/leave_type.route');
const DepartmentRoute = require('./src/routes/department.route');
const patientVisitRoutes = require('./src/routes/outpatient.visits.route');
const patientChargesRoutes = require('./src/routes/outpatient.charges.route');
const patientTimelineRoutes = require('./src/routes/outpatient.timeline.route');
const outPatientChargesRoutes = require('./src/routes/outpatient.patientcharges.route');
const patientMedicationRoutes = require('./src/routes/outpatient.medication.route');
const patientOperationRoutes = require('./src/routes/outpatient.operation.route');
const patientOperationsRoutes = require('./src/routes/outpatient.operations.route');
const outPatientPaymentRoutes = require('./src/routes/outpatient.payment.route');
const outPatientLabInvestigationRoutes = require('./src/routes/outpatient.lab_investigation.route');
const outPatientTreatmentHistoryRoutes = require('./src/routes/outpatient.treatment_history.route');
const outPatientLiveConsultationRoutes = require('./src/routes/outpatient.live_consultation.route');
const outPatientOpdDetailsRoutes = require('./src/routes/outpatient.opd_details.route');
const outPatientDischargeCardRoutes = require('./src/routes/outpatient.discharge_card.route');


//import frontoffice routes

const frontOfficeVisitorsBookRoutes = require('./src/routes/frontoffice.visitors_book.route');
const frontOfficeCallLogRoutes = require('./src/routes/frontoffice.general_calllog.route');
const frontOfficeRecievedPostalRoutes = require('./src/routes/frontoffice.recievedpostal.route');
const frontOfficeDispatchPostalRoutes = require('./src/routes/frontoffice.dispatchpostal.route');
const frontOfficeComplaintRoutes = require('./src/routes/frontoffice.complaint.route');









//create patient routes

app.use('/api/leaveTypes',leave_type_route);
app.use('/api/departments',DepartmentRoute);
app.use('/api/outpatient/visits',patientVisitRoutes);
app.use('/api/outpatient/charges',patientChargesRoutes);
app.use('/api/outpatient/timeline',patientTimelineRoutes);
app.use('/api/outpatient/patientcharges',outPatientChargesRoutes);
app.use('/api/outpatient/medication',patientMedicationRoutes);
app.use('/api/outpatient/operation',patientOperationRoutes);
app.use('/api/outpatient/operations',patientOperationsRoutes);
app.use('/api/outpatient/payment',outPatientPaymentRoutes);
app.use('/api/outpatient/lab_investigation',outPatientLabInvestigationRoutes);
app.use('/api/outpatient/treatment_history',outPatientTreatmentHistoryRoutes);
app.use('/api/outpatient/live_consultation',outPatientLiveConsultationRoutes);
app.use('/api/outpatient/opd_details',outPatientOpdDetailsRoutes);
app.use('/api/outpatient/discharge_card',outPatientDischargeCardRoutes);


// create frontoffice routes

app.use('/api/frontoffice/visitors_book',frontOfficeVisitorsBookRoutes);
app.use('/api/frontoffice/call_log',frontOfficeCallLogRoutes);
app.use('/api/frontoffice/recieved_postal',frontOfficeRecievedPostalRoutes);
app.use('/api/frontoffice/dispatch_postal',frontOfficeDispatchPostalRoutes);
app.use('/api/frontoffice/complaint',frontOfficeComplaintRoutes);







//listen to the port

app.listen(port,()=>{
console.log(`server is running at port ${port}`);
});