import {faker} from '@faker-js/faker'
import {Patient} from "../entity/patient";
import {Chambre} from "../entity/chambre";


export const fakeChambre = () => {
    const chambres = [];
    const exampleChambres = ['Réanimation', 'Chirurgie', 'Pédiatrie', 'Maternité', 'Urgence', 'Gériatrie', 'Psychiatrie', 'Cardiologie', 'Neurologie', 'Oncologie']
    const disponibilite = ['Disponible', 'Occupée', 'En nettoyage', 'En réparation']
    const numero = ['A1', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5', 'C1', 'C2', 'C3', 'C4', 'C5', 'D1', 'D2', 'D3', 'D4', 'D5', 'E1', 'E2', 'E3', 'E4', 'E5']

    for (let i = 0; i < numero.length; i++) {
        const chambre = new Chambre();
        chambre.numeroDeChambre = numero[i];
        chambre.typeDeChambre = exampleChambres[faker.number.int({min: 0, max: exampleChambres.length -1})];
        chambre.statutDeDisponibilite = disponibilite[faker.number.int({min: 0, max: disponibilite.length -1})];
        chambres.push(chambre);
    }

    return chambres;
}
