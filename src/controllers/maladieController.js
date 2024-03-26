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
exports.MaladieController = void 0;
const maladie_1 = require("../entity/maladie");
const patient_1 = require("../entity/patient");
class MaladieController {
    constructor() {
    }
    static deleteMaladie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const maladie = yield maladie_1.Maladie.findOne({ where: { id: id } });
            if (!maladie)
                return res.status(401).json({ message: "Maladie not found" });
            yield maladie.remove();
            return res.json({ message: "Maladie deleted" });
        });
    }
    static getMaladieById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const maladie = yield maladie_1.Maladie.findOne({ where: { id: id } });
            if (!maladie)
                return res.status(401).json({ message: "Maladie not found" });
            return res.json(maladie);
        });
    }
    static getMaladies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categorie = req.query.categorie;
            const gravite = req.query.gravite;
            const maladies = yield maladie_1.Maladie.find({ where: { gravite: gravite, categorie: categorie } });
            return res.json(maladies);
        });
    }
    static createMaladie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const maladie = new maladie_1.Maladie();
            maladie.nom = req.body.nom;
            maladie.gravite = req.body.gravite;
            maladie.categorie = req.body.categorie;
            if (!maladie.nom || !maladie.gravite || !maladie.categorie)
                return res.status(400).json({ message: "Please provide all fields" });
            yield maladie.save();
            return res.json(maladie);
        });
    }
    static associerMaladie(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const maladieId = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.maladieId;
            const patients = (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.patients;
            if (!maladieId || !patients)
                return res.status(400).json({ message: "Please provide all fields" });
            const maladie = yield maladie_1.Maladie.findOne({ where: { id: maladieId } });
            if (!maladie)
                return res.status(400).json({ message: "Maladie not found" });
            for (let i = 0; i < patients.length; i++) {
                const patient = yield patient_1.Patient.findOne({ where: { id: patients[i] } });
                if (patient) {
                    patient.diagnostic = maladie.nom;
                    yield patient.save();
                }
                else {
                    return res.status(400).json({ message: "Patient not found" });
                }
            }
        });
    }
}
exports.MaladieController = MaladieController;
