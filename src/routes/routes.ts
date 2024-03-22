import express from 'express'
import {UserController} from "../controllers/userController";
import {MedecinController} from "../controllers/medecinController";
import {PatientController} from "../controllers/patientController";

const router = express.Router()

router.get('/api/user', UserController.getUser);

router.post('/api/user',  UserController.createUser);

router.put('/api/user',  UserController.updateUser);

router.get('/api/ping', (req, res) => {
    res.send('pong clinique')
});

router.get('/api/medecin/:id', MedecinController.getMedecinById);

router.get('/api/medecin/', MedecinController.getMedecins);

router.post('/api/medecin/', MedecinController.createMedecin);

router.delete('/api/medecin/:id', MedecinController.deleteMedecin);

router.put('/api/medecin/:id', MedecinController.updateMedecin);

router.get('/api/patient/:id', PatientController.getPatientById);

router.get('/api/patient/', PatientController.getPatients);

router.post('/api/patient/', PatientController.createPatient);

router.put('/api/patient/:id', PatientController.updatePatient);

router.delete('/api/patient/:id', PatientController.deletePatient);


export default router
