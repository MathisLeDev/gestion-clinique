import {Patient} from "../entity/patient";

export class PatientController {

    constructor() {
    }

    static async updatePatient(req: any, res: any) {
        /**
         * example of body
         * {
         *    "diagnostic": "Mort",
         * }
         */
        const id = req.query.id;
        const patient = await Patient.findOne({where: {id: id}});
        if(!patient) return res.status(401).json({message: "Patient not found"})
        patient.diagnostic = req.body.diagnostic;
        await patient.save();
        return res.json(patient)
    }

    static async getPatientById(req: any, res: any) {
        const id = req.params.id;
        const patient = await Patient.findOne({where: {id: id}});
        if(!patient) return res.status(401).json({message: "Patient not found"})
        return res.json(patient)
    }

    static async deletePatient(req: any, res: any) {
        const id = req.params.id;
        const patient = await Patient.findOne({where: {id: id}});
        if(!patient) return res.status(401).json({message: "Patient not found"})
        await patient.remove();
        return res.json({message: "Patient deleted"})
    }

    static async getPatients(req: any, res: any) {
        const age = req.query.age;
        const nom = req.query.nom;
        const patients = await Patient.find({where: {nom: nom, age: age}});
        return res.json(patients)
    }


    static async createPatient(req: any, res: any) {
        const patient = new Patient();
        patient.nom = req.body.nom;
        patient.age = req.body.age;
        patient.genre = req.body.genre;
        patient.diagnostic = req.body.diagnostic;
        patient.coordonnees = req.body.coordonnees;


        /* example of body for patient
        {
        "nom": "Mathis Brouard",
        "age": 19,
        "genre": "Homme",
        "diagnostic": "Mort",
        "coordonnees": "221B Baker Street, London"
        }
         */

        if(!patient.nom || !patient.age || !patient.genre || !patient.diagnostic || !patient.coordonnees) return res.status(400).json({message: "Please provide all fields"});
        if(!['Homme', 'Femme'].includes(patient.genre)) return res.status(400).json({message: "Genre not valid"});
        await patient.save();
        return res.json(patient)

    }
}
