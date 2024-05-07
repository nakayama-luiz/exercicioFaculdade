import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Book } from "./entity/Book"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "test",
    synchronize: true,
    entities: [Book, User],
    migrations: [],
    subscribers: [],
})
