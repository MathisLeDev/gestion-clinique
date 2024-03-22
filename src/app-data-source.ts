import {DataSource} from "typeorm";
import {User} from "./entity/user";
import {Medecin} from "./entity/medecin";
import {Chambre} from "./entity/chambre";
import {Assignation} from "./entity/assignations";
import {Maladie} from "./entity/maladie";
import {Patient} from "./entity/patient";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "172.20.32.1",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User, Medecin, Chambre, Assignation, Maladie, Patient],
    subscribers: [],
    migrations: [],
})
