import { DataSource } from "typeorm"
import "reflect-metadata"
import 'dotenv/config'
import { Options, ProductOptions, Products, Questions } from "./entity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [Questions, Options, Products, ProductOptions],
    migrations: ["src/db/migrations/*.ts"],
    subscribers: [],
});

AppDataSource.initialize();

export default AppDataSource;