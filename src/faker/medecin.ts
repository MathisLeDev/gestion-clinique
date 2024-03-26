import {faker} from '@faker-js/faker'
import {Medecin} from "../entity/medecin";


export const fakeMedecin = () => {
    const medecins = [];
    const exampleSpecialites = ['Cardiologue', 'Dentiste', 'Généraliste', 'Ophtalmologue', 'Pédiatre', 'Psychiatre', 'Radiologue', 'Urologue'];

    for (let i = 0; i < 50; i++) {
        const medecin = new Medecin();
        medecin.nom = faker.person.fullName();
        medecin.specialite = exampleSpecialites[faker.number.int({min: 0, max: exampleSpecialites.length -1})];
        medecin.coordonnees = faker.location.streetAddress();
        medecins.push(medecin);
    }

    return medecins;
}
