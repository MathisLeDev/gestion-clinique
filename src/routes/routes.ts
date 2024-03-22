import express from 'express'
import {UserController} from "../controllers/userController";
import {MedecinController} from "../controllers/medecinController";

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

router.put('/api/medecin/:id', MedecinController.updateMedecin);

export default router
