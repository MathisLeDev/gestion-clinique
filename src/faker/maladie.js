"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeMaladie = void 0;
const faker_1 = require("@faker-js/faker");
const maladie_1 = require("../entity/maladie");
const fakeMaladie = () => {
    const maladies = [];
    const exampleMaladie = ['Covid-19', 'Grippe', 'Rhume', 'Bronchite', 'Pneumonie', 'Tuberculose', 'Malaria', 'Paludisme', 'Choléra', 'Dengue', 'Ebola', 'Zika', 'Chikungunya', 'Hépatite', 'VIH', 'SIDA', 'Cancer', 'Diabète', 'Hypertension', 'Obésité', 'Anémie', 'Asthme', 'Arthrite', 'Autisme', 'Alzheimer', 'Parkinson', 'Sclérose en plaques', 'Epilepsie', 'Schizophrénie', 'Dépression', 'Anxiété', 'Trouble bipolaire', 'Trouble de la personnalité', 'Trouble obsessionnel compulsif', 'Trouble de stress post-traumatique', 'Trouble de l\'alimentation'];
    const exampleMaladieCategorie = ['Infectieuse', 'Virale', 'Bactérienne', 'Parasitaire', 'Auto-immune', 'Génétique', 'Héréditaire', 'Développementale', 'Mentale', 'Psychologique', 'Neurologique', 'Cardiovasculaire', 'Respiratoire', 'Digestive', 'Endocrinienne', 'Hématologique', 'Oncologique', 'Dermatologique', 'Rhumatologique', 'Orthopédique', 'Ophtalmologique', 'O.R.L', 'Urologique', 'Gynécologique', 'Obstétricale', 'Pédiatrique', 'Gériatrique'];
    for (let i = 0; i < 50; i++) {
        const maladie = new maladie_1.Maladie();
        maladie.nom = exampleMaladie[faker_1.faker.number.int({ min: 0, max: exampleMaladie.length - 1 })];
        maladie.categorie = exampleMaladieCategorie[faker_1.faker.number.int({ min: 0, max: exampleMaladieCategorie.length - 1 })];
        maladie.gravite = ['Légère', 'Modérée', 'Sévère', 'Critique'][faker_1.faker.number.int({ min: 0, max: 3 })];
        maladies.push(maladie);
    }
    return maladies;
};
exports.fakeMaladie = fakeMaladie;
