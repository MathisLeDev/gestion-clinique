import {Patient} from "../entity/patient";
import {Chambre} from "../entity/chambre";
import {Assignation} from "../entity/assignations";

export class ChambreController {

    constructor() {
    }

    static async getChambres(req: any, res: any) {
        try {
            const chambres = await Chambre.find();
            return res.json(chambres)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting chambres"
            });
        }
    }

    static async createChambre(req: any, res: any) {
        try {
            const chambre = new Chambre();
            chambre.typeDeChambre = req.body.type;
            chambre.statutDeDisponibilite = req.body.status;
            chambre.numeroDeChambre = req.body.numero;
            if(!chambre.typeDeChambre || !chambre.statutDeDisponibilite || !chambre.numeroDeChambre) return res.status(400).json({message: "Please provide all fields"});
            await chambre.save();
            return res.json(chambre)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while creating chambre"
            });
        }
    }

    static async deleteChambre(req: any, res: any) {
        try {
            const id = req.params.id;
            const chambre = await Chambre.findOne({where: {id: id}});
            if(!chambre) return res.status(401).json({message: "Chambre not found"})
            await chambre.remove();
            return res.json({message: "Chambre deleted"})
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while deleting chambre"
            });
        }
    }

    static async assignerChambre(req: any, res: any) {
        try {
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
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while assigning chambre"
            });
        }
    }
}
