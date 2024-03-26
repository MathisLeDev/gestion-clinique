"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakepatient = void 0;
const faker_1 = require("@faker-js/faker");
const patient_1 = require("../entity/patient");
const fakepatient = () => {
    const patients = [];
    const exampleDiagnostiques = ['Décédé', 'En observation', 'En traitement', 'En attente de traitement', 'En attente de diagnostic', 'En attente de chirurgie', 'En attente de résultats', 'En attente de transfert'];
    for (let i = 0; i < 50; i++) {
        const patient = new patient_1.Patient();
        patient.nom = faker_1.faker.person.fullName();
        patient.age = faker_1.faker.number.int({ min: 1, max: 100 });
        patient.genre = ['Homme', 'Femme'][faker_1.faker.number.int({ min: 0, max: 1 })];
        patient.diagnostic = exampleDiagnostiques[faker_1.faker.number.int({ min: 0, max: exampleDiagnostiques.length - 1 })];
        patient.coordonnees = faker_1.faker.location.streetAddress();
        patients.push(patient);
    }
    return patients;
};
exports.fakepatient = fakepatient;
