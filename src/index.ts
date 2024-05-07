import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express"
import {routes} from "../src/routes"

AppDataSource.initialize().then(async () => {
    const app = express()

    app.use(express.json())
    const route = routes;
    app.use(route)
    app.listen(3000)

}).catch(error => console.log(error))
