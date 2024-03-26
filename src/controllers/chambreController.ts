import {Maladie} from "../entity/maladie";
import {Patient} from "../entity/patient";
import {Chambre} from "../entity/chambre";
import {Assignation} from "../entity/assignations";

export class ChambreController {

    constructor() {
    }

    static async getChambres(req: any, res: any) {
        const chambres = await Chambre.find();
        return res.json(chambres)
    }

    static async createChambre(req: any, res: any) {
        const chambre = new Chambre();
        chambre.typeDeChambre = req.body.type;
        chambre.statutDeDisponibilite = req.body.status;
        chambre.numeroDeChambre = req.body.numero;
        if(!chambre.typeDeChambre || !chambre.statutDeDisponibilite || !chambre.numeroDeChambre) return res.status(400).json({message: "Please provide all fields"});
        await chambre.save();
        return res.json(chambre)
    }

    static async deleteChambre(req: any, res: any) {
        const id = req.params.id;
        const chambre = await Chambre.findOne({where: {id: id}});
        if(!chambre) return res.status(401).json({message: "Chambre not found"})
        await chambre.remove();
        return res.json({message: "Chambre deleted"})
    }

    static async assignerChambre(req: any, res: any) {
        const chambreId = req?.body?.chambreId;
        const patient = req?.body?.patientId;
        if(!chambreId || !patient) return res.status(400).json({message: "Please provide all fields"});
        const chambre = await Chambre.findOne({where: {id: chambreId}});
        if(!chambre) return res.status(400).json({message: "Chambre not found"});
        const patientFound = await Patient.findOne({where: {id: patient}});
        if(!patientFound) return res.status(400).json({message: "Patient not found"});
        const assignation = new Assignation();
        assignation.room = chambre;
        assignation.patient = patientFound;
        await assignation.save();
        return res.json({message: "Patient assigné à la chambre"})
    }
}
