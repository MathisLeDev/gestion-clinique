"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChambreController = void 0;
const patient_1 = require("../entity/patient");
const chambre_1 = require("../entity/chambre");
const assignations_1 = require("../entity/assignations");
class ChambreController {
    constructor() {
    }
    static getChambres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chambres = yield chambre_1.Chambre.find();
                return res.json(chambres);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting chambres"
                });
            }
        });
    }
    static createChambre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chambre = new chambre_1.Chambre();
                chambre.typeDeChambre = req.body.type;
                chambre.statutDeDisponibilite = req.body.status;
                chambre.numeroDeChambre = req.body.numero;
                if (!chambre.typeDeChambre || !chambre.statutDeDisponibilite || !chambre.numeroDeChambre)
                    return res.status(400).json({ message: "Please provide all fields" });
                yield chambre.save();
                return res.json(chambre);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while creating chambre"
                });
            }
        });
    }
    static deleteChambre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const chambre = yield chambre_1.Chambre.findOne({ where: { id: id } });
                if (!chambre)
                    return res.status(401).json({ message: "Chambre not found" });
                yield chambre.remove();
                return res.json({ message: "Chambre deleted" });
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while deleting chambre"
                });
            }
        });
    }
    static assignerChambre(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chambreId = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.chambreId;
                const patient = (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.patientId;
                if (!chambreId || !patient)
                    return res.status(400).json({ message: "Please provide all fields" });
                const chambre = yield chambre_1.Chambre.findOne({ where: { id: chambreId } });
                if (!chambre)
                    return res.status(400).json({ message: "Chambre not found" });
                const patientFound = yield patient_1.Patient.findOne({ where: { id: patient } });
                if (!patientFound)
                    return res.status(400).json({ message: "Patient not found" });
                const assignation = new assignations_1.Assignation();
                assignation.room = chambre;
                assignation.patient = patientFound;
                yield assignation.save();
                return res.json({ message: "Patient assigné à la chambre" });
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while assigning chambre"
                });
            }
        });
    }
}
exports.ChambreController = ChambreController;
