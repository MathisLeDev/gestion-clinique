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
exports.MedecinController = void 0;
const medecin_1 = require("../entity/medecin");
class MedecinController {
    constructor() {
    }
    static deleteMedecin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const medecin = yield medecin_1.Medecin.findOne({ where: { id: id } });
                if (!medecin)
                    return res.status(401).json({ message: "Medecin not found" });
                yield medecin.remove();
                return res.json({ message: "Medecin deleted" });
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while deleting medecin"
                });
            }
        });
    }
    static updateMedecin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.id;
                const medecin = yield medecin_1.Medecin.findOne({ where: { id: id } });
                if (!medecin)
                    return res.status(401).json({ message: "Medecin not found" });
                medecin.nom = req.body.nom;
                medecin.specialite = req.body.specialite;
                medecin.coordonnees = req.body.coordonnees;
                yield medecin.save();
                return res.json(medecin);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while updating medecin"
                });
            }
        });
    }
    static getMedecinById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const medecin = yield medecin_1.Medecin.findOne({ where: { id: id } });
                if (!medecin)
                    return res.status(401).json({ message: "Medecin not found" });
                return res.json(medecin);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting medecin by id"
                });
            }
        });
    }
    static getMedecins(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const specialite = req.query.specialite;
                const coordonnees = req.query.coordonnees;
                const nom = req.query.nom;
                const medecins = yield medecin_1.Medecin.find({ where: { nom: nom, specialite: specialite, coordonnees: coordonnees } });
                return res.json(medecins);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while getting medecins"
                });
            }
        });
    }
    static createMedecin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const medecin = new medecin_1.Medecin();
                medecin.nom = req.body.nom;
                medecin.specialite = req.body.specialite;
                medecin.coordonnees = req.body.coordonnees;
                if (!medecin.nom || !medecin.specialite || !medecin.coordonnees)
                    return res.status(400).json({ message: "Please provide all fields" });
                if (!['Cardiologue', 'Dentiste', 'Généraliste', 'Ophtalmologue', 'Pédiatre', 'Psychiatre', 'Radiologue', 'Urologue'].includes(medecin.specialite))
                    return res.status(400).json({ message: "Specialite not valid" });
                yield medecin.save();
                return res.json(medecin);
            }
            catch (error) {
                return res.status(500).send({
                    message: "An unexpected error occurred while creating medecin"
                });
            }
        });
    }
}
exports.MedecinController = MedecinController;
