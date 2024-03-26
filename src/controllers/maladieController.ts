import {Maladie} from "../entity/maladie";
import {Patient} from "../entity/patient";

export class MaladieController {

    constructor() {
    }

    static async deleteMaladie(req: any, res: any) {
        const id = req.params.id;
        const maladie = await Maladie.findOne({where: {id: id}});
        if(!maladie) return res.status(401).json({message: "Maladie not found"})
        await maladie.remove();
        return res.json({message: "Maladie deleted"})
    }



    static async getMaladieById(req: any, res: any) {
        const id = req.params.id;
        const maladie = await Maladie.findOne({where: {id: id}});
        if(!maladie) return res.status(401).json({message: "Maladie not found"})
        return res.json(maladie)
    }

    static async getMaladies(req: any, res: any) {
        const categorie = req.query.categorie;
        const gravite = req.query.gravite
        const maladies = await Maladie.find({where: {gravite: gravite, categorie: categorie}});
        return res.json(maladies)
    }


    static async createMaladie(req: any, res: any) {
        const maladie = new Maladie();
        maladie.nom = req.body.nom;
        maladie.gravite = req.body.gravite;
        maladie.categorie = req.body.categorie;
        if(!maladie.nom || !maladie.gravite || !maladie.categorie) return res.status(400).json({message: "Please provide all fields"});
        await maladie.save();
        return res.json(maladie)
    }

    static async associerMaladie(req: any, res: any) {
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
    }

}
