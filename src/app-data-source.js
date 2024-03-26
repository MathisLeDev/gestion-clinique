"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const medecin_1 = require("./entity/medecin");
const chambre_1 = require("./entity/chambre");
const assignations_1 = require("./entity/assignations");
const maladie_1 = require("./entity/maladie");
const patient_1 = require("./entity/patient");
const _1711120300391_medecin_1 = require("./migrations/1711120300391-medecin");
const _1711122118715_patient_1 = require("./migrations/1711122118715-patient");
const _1711122861159_maladie_1 = require("./migrations/1711122861159-maladie");
const _1711478794720_chambre_1 = require("./migrations/1711478794720-chambre");
exports.appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "172.28.32.1",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [user_1.User, medecin_1.Medecin, chambre_1.Chambre, assignations_1.Assignation, maladie_1.Maladie, patient_1.Patient, maladie_1.Maladie],
    subscribers: [],
    migrations: [_1711478794720_chambre_1.Chambre1711478794720, _1711120300391_medecin_1.Medecin1711120300391, _1711122118715_patient_1.Patient1711122118715, _1711122861159_maladie_1.Maladie1711122861159],
});
