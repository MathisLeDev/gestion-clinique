import {DataSource} from "typeorm";
import {User} from "./entity/user";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "172.20.32.1",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})
