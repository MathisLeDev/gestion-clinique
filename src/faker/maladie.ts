import {faker} from '@faker-js/faker'
import {Maladie} from "../entity/maladie";


export const fakeMaladie = () => {
    const maladies = [];
    const exampleMaladie = ['Covid-19', 'Grippe', 'Rhume', 'Bronchite', 'Pneumonie', 'Tuberculose', 'Malaria', 'Paludisme', 'Choléra', 'Dengue', 'Ebola', 'Zika', 'Chikungunya', 'Hépatite', 'VIH', 'SIDA', 'Cancer', 'Diabète', 'Hypertension', 'Obésité', 'Anémie', 'Asthme', 'Arthrite', 'Autisme', 'Alzheimer', 'Parkinson', 'Sclérose en plaques', 'Epilepsie', 'Schizophrénie', 'Dépression', 'Anxiété', 'Trouble bipolaire', 'Trouble de la personnalité', 'Trouble obsessionnel compulsif', 'Trouble de stress post-traumatique', 'Trouble de l\'alimentation'];
    const exampleMaladieCategorie = ['Infectieuse', 'Virale', 'Bactérienne', 'Parasitaire', 'Auto-immune', 'Génétique', 'Héréditaire', 'Développementale', 'Mentale', 'Psychologique', 'Neurologique', 'Cardiovasculaire', 'Respiratoire', 'Digestive', 'Endocrinienne', 'Hématologique', 'Oncologique', 'Dermatologique', 'Rhumatologique', 'Orthopédique', 'Ophtalmologique', 'O.R.L', 'Urologique', 'Gynécologique', 'Obstétricale', 'Pédiatrique', 'Gériatrique'];

    for (let i = 0; i < 50; i++) {
        const maladie = new Maladie();
        maladie.nom = exampleMaladie[faker.number.int({min: 0, max: exampleMaladie.length -1})];
        maladie.categorie = exampleMaladieCategorie[faker.number.int({min: 0, max: exampleMaladieCategorie.length -1})];
        maladie.gravite = ['Légère', 'Modérée', 'Sévère', 'Critique'][faker.number.int({min: 0, max: 3})];
        maladies.push(maladie);
    }

    return maladies;
}
