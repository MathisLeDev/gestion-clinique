import {faker} from '@faker-js/faker'
import {Patient} from "../entity/patient";


export const fakepatient = () => {
    const patients = [];
    const exampleDiagnostiques = ['Décédé', 'En observation', 'En traitement', 'En attente de traitement', 'En attente de diagnostic', 'En attente de chirurgie', 'En attente de résultats', 'En attente de transfert']

    for (let i = 0; i < 50; i++) {
        const patient = new Patient();
        patient.nom = faker.person.fullName();
        patient.age = faker.number.int({ min: 1, max: 100 });
        patient.genre = ['Homme', 'Femme'][faker.number.int({min: 0, max: 1})];

        patient.diagnostic = exampleDiagnostiques[faker.number.int({min: 0, max: exampleDiagnostiques.length -1})];
        patient.coordonnees = faker.location.streetAddress();
        patients.push(patient);
    }

    return patients;
}
