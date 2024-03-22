"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeMedecin = void 0;
const faker_1 = require("@faker-js/faker");
const medecin_1 = require("../entity/medecin");
const fakeMedecin = () => {
    const medecins = [];
    const exampleSpecialites = ['Cardiologue', 'Dentiste', 'Généraliste', 'Ophtalmologue', 'Pédiatre', 'Psychiatre', 'Radiologue', 'Urologue'];
    for (let i = 0; i < 50; i++) {
        const medecin = new medecin_1.Medecin();
        medecin.nom = faker_1.faker.person.fullName();
        medecin.specialite = exampleSpecialites[faker_1.faker.number.int({ min: 0, max: exampleSpecialites.length - 1 })];
        medecin.coordonnees = faker_1.faker.location.streetAddress();
        medecins.push(medecin);
    }
    return medecins;
};
exports.fakeMedecin = fakeMedecin;
