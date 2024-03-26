import {Maladie} from "../entity/maladie";
import {Patient} from "../entity/patient";

export class MaladieController {

    constructor() {
    }

    static async deleteMaladie(req: any, res: any) {
        try {
            const id = req.params.id;
            const maladie = await Maladie.findOne({where: {id: id}});
            if(!maladie) return res.status(401).json({message: "Maladie not found"})
            await maladie.remove();
            return res.json({message: "Maladie deleted"})
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while deleting maladie"
            });
        }
    }

    static async getMaladieById(req: any, res: any) {
        try {
            const id = req.params.id;
            const maladie = await Maladie.findOne({where: {id: id}});
            if(!maladie) return res.status(401).json({message: "Maladie not found"})
            return res.json(maladie)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting maladie by id"
            });
        }
    }

    static async getMaladies(req: any, res: any) {
        try {
            const categorie = req.query.categorie;
            const gravite = req.query.gravite
            const nom = req.query.nom
            const maladies = await Maladie.find({where: {nom, gravite, categorie}});
            return res.json(maladies)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting maladies"
            });
        }
    }

    static async createMaladie(req: any, res: any) {
        try {
            const maladie = new Maladie();
            maladie.nom = req.body.nom;
            maladie.gravite = req.body.gravite;
            maladie.categorie = req.body.categorie;
            if(!maladie.nom || !maladie.gravite || !maladie.categorie) return res.status(400).json({message: "Please provide all fields"});
            await maladie.save();
            return res.json(maladie)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while creating maladie"
            });
        }
    }

    static async associerMaladie(req: any, res: any) {
        try {
            const maladieId = req?.body?.maladieId;
            const patients = req?.body?.patients;
            if(!maladieId || !patients) return res.status(400).json({message: "Please provide all fields"});
            const maladie = await Maladie.findOne({where: {id: maladieId}});
            if(!maladie) return res.status(400).json({message: "Maladie not found"});
            for(let i = 0; i < patients.length; i++) {
                const patient = await Patient.findOne({where: {id: patients[i]}});
                if(patient) {
                    patient.diagnostic = maladie.nom;
                    await patient.save();
                } else {
                    return res.status(400).json({message: "Patient not found"})
                }
            }
            return res.json({message: "Maladie associée à tous les patients"})
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while associating maladie"
            });
        }
    }

}
