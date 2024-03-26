import {DataSource} from "typeorm";
import {User} from "./entity/user";
import {Medecin} from "./entity/medecin";
import {Chambre} from "./entity/chambre";
import {Assignation} from "./entity/assignations";
import {Maladie} from "./entity/maladie";
import {Patient} from "./entity/patient";
import {Medecin1711120300391} from "./migrations/1711120300391-medecin";
import {Patient1711122118715} from "./migrations/1711122118715-patient";
import {Maladie1711122861159} from "./migrations/1711122861159-maladie";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "172.28.32.1",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, Medecin, Chambre, Assignation, Maladie, Patient, Maladie],
    subscribers: [],
    migrations: [],
})
