import {Medecin} from "../entity/medecin";

export class MedecinController {

    constructor() {
    }

    static async deleteMedecin(req: any, res: any) {
        const id = req.params.id;
        const medecin = await Medecin.findOne({where: {id: id}});
        if(!medecin) return res.status(401).json({message: "Medecin not found"})
        await medecin.remove();
        return res.json({message: "Medecin deleted"})
    }

    static async updateMedecin(req: any, res: any) {
        /**
         * example of body
         * {
         *    "nom": "Modif",
         *    "specialite": "Cardiologue",
         *    "coordonnees": "221B Baker Street, London"
         * }
         */
        const id = req.query.id;
        const medecin = await Medecin.findOne({where: {id: id}});
        if(!medecin) return res.status(401).json({message: "Medecin not found"})
        medecin.nom = req.body.nom;
        medecin.specialite = req.body.specialite;
        medecin.coordonnees = req.body.coordonnees;
        await medecin.save();
        return res.json(medecin)
    }

    static async getMedecinById(req: any, res: any) {
        const id = req.params.id;
        const medecin = await Medecin.findOne({where: {id: id}});
        if(!medecin) return res.status(401).json({message: "Medecin not found"})
        return res.json(medecin)
    }

    static async getMedecins(req: any, res: any) {
        const specialite = req.query.specialite;
        const coordonnees = req.query.coordonnees;
        const nom = req.query.nom;
        const medecins = await Medecin.find({where: {nom: nom, specialite: specialite, coordonnees: coordonnees}});
        return res.json(medecins)
    }


    static async createMedecin(req: any, res: any) {
        const medecin = new Medecin();
        medecin.nom = req.body.nom;
        medecin.specialite = req.body.specialite;
        medecin.coordonnees = req.body.coordonnees;

        /* example of body
        {
            "nom": "Dr. House",
            "specialite": "Cardiologue",
            "coordonnees": "221B Baker Street, London"
        }
         */

        if(!medecin.nom || !medecin.specialite || !medecin.coordonnees) return res.status(400).json({message: "Please provide all fields"});
        if(!['Cardiologue', 'Dentiste', 'Généraliste', 'Ophtalmologue', 'Pédiatre', 'Psychiatre', 'Radiologue', 'Urologue'].includes(medecin.specialite)) return res.status(400).json({message: "Specialite not valid"});


        await medecin.save();
        return res.json(medecin)
    }
}
