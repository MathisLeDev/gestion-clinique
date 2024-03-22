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
exports.appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "172.20.32.1",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [user_1.User, medecin_1.Medecin, chambre_1.Chambre, assignations_1.Assignation, maladie_1.Maladie, patient_1.Patient],
    subscribers: [],
    migrations: [],
});
