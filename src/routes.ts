import { Router } from "express";
import { bookController } from "./bookController";


export const routes = Router();

routes.get('/compras', ()=>{
    return 'comrpas';
})

routes.post('/', new bookController().create)
routes.delete('/:id', new bookController().delete)
routes.get('/findAll', new bookController().findAll)
routes.post('/user', new bookController().createUser)
routes.put('/:id', new bookController().update)
routes.get('/book/:id', new bookController().findOne)