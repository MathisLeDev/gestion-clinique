import {Medecin} from "../entity/medecin";

export class MedecinController {

    constructor() {
    }

    static async deleteMedecin(req: any, res: any) {
        try {
            const id = req.params.id;
            const medecin = await Medecin.findOne({where: {id: id}});
            if(!medecin) return res.status(401).json({message: "Medecin not found"})
            await medecin.remove();
            return res.json({message: "Medecin deleted"})
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while deleting medecin"
            });
        }
    }

    static async updateMedecin(req: any, res: any) {
        try {
            const id = req.query.id;
            const medecin = await Medecin.findOne({where: {id: id}});
            if(!medecin) return res.status(401).json({message: "Medecin not found"})
            medecin.nom = req.body.nom;
            medecin.specialite = req.body.specialite;
            medecin.coordonnees = req.body.coordonnees;
            await medecin.save();
            return res.json(medecin)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while updating medecin"
            });
        }
    }

    static async getMedecinById(req: any, res: any) {
        try {
            const id = req.params.id;
            const medecin = await Medecin.findOne({where: {id: id}});
            if(!medecin) return res.status(401).json({message: "Medecin not found"})
            return res.json(medecin)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting medecin by id"
            });
        }
    }

    static async getMedecins(req: any, res: any) {
        try {
            const specialite = req.query.specialite;
            const coordonnees = req.query.coordonnees;
            const nom = req.query.nom;
            const medecins = await Medecin.find({where: {nom: nom, specialite: specialite, coordonnees: coordonnees}});
            return res.json(medecins)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while getting medecins"
            });
        }
    }

    static async createMedecin(req: any, res: any) {
        try {
            const medecin = new Medecin();
            medecin.nom = req.body.nom;
            medecin.specialite = req.body.specialite;
            medecin.coordonnees = req.body.coordonnees;

            if(!medecin.nom || !medecin.specialite || !medecin.coordonnees) return res.status(400).json({message: "Please provide all fields"});
            if(!['Cardiologue', 'Dentiste', 'Généraliste', 'Ophtalmologue', 'Pédiatre', 'Psychiatre', 'Radiologue', 'Urologue'].includes(medecin.specialite)) return res.status(400).json({message: "Specialite not valid"});

            await medecin.save();
            return res.json(medecin)
        } catch (error) {
            return res.status(500).send({
                message: "An unexpected error occurred while creating medecin"
            });
        }
    }
}
