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
exports.PatientController = void 0;
const patient_1 = require("../entity/patient");
class PatientController {
    constructor() {
    }
    static updatePatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.id;
                const patient = yield patient_1.Patient.findOne({ where: { id: id } });
                if (!patient)
                    return res.status(401).json({ message: "Patient not found" });
                patient.diagnostic = req.body.diagnostic;
                yield patient.save();
                return res.json(patient);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while updating patient"
                });
            }
        });
    }
    static getPatientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const patient = yield patient_1.Patient.findOne({ where: { id: id } });
                if (!patient)
                    return res.status(401).json({ message: "Patient not found" });
                return res.json(patient);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting patient by id"
                });
            }
        });
    }
    static deletePatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const patient = yield patient_1.Patient.findOne({ where: { id: id } });
                if (!patient)
                    return res.status(401).json({ message: "Patient not found" });
                yield patient.remove();
                return res.json({ message: "Patient deleted" });
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while deleting patient"
                });
            }
        });
    }
    static getPatients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const age = req.query.age;
                const nom = req.query.nom;
                const patients = yield patient_1.Patient.find({ where: { nom: nom, age: age } });
                return res.json(patients);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting patients"
                });
            }
        });
    }
    static createPatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patient = new patient_1.Patient();
                patient.nom = req.body.nom;
                patient.age = req.body.age;
                patient.genre = req.body.genre;
                patient.diagnostic = req.body.diagnostic;
                patient.coordonnees = req.body.coordonnees;
                if (!patient.nom || !patient.age || !patient.genre || !patient.diagnostic || !patient.coordonnees)
                    return res.status(400).json({ message: "Please provide all fields" });
                if (!['Homme', 'Femme'].includes(patient.genre))
                    return res.status(400).json({ message: "Genre not valid" });
                yield patient.save();
                return res.json(patient);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while creating patient"
                });
            }
        });
    }
}
exports.PatientController = PatientController;
