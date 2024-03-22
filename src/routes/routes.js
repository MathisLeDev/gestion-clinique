"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const medecinController_1 = require("../controllers/medecinController");
const router = express_1.default.Router();
router.get('/api/user', userController_1.UserController.getUser);
router.post('/api/user', userController_1.UserController.createUser);
router.put('/api/user', userController_1.UserController.updateUser);
router.get('/api/ping', (req, res) => {
    res.send('pong clinique');
});
router.get('/api/medecin/:id', medecinController_1.MedecinController.getMedecinById);
router.get('/api/medecin/', medecinController_1.MedecinController.getMedecins);
router.post('/api/medecin/', medecinController_1.MedecinController.createMedecin);
router.put('/api/medecin/:id', medecinController_1.MedecinController.updateMedecin);
exports.default = router;
