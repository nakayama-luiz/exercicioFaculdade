import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Book } from "./entity/Book";
import { User } from "./entity/User";
import { parse } from "path";
const bookRepo = AppDataSource.manager.getRepository(Book)

export class bookController{

    async create(req: Request, res:Response){
        const compras = await AppDataSource.manager.getRepository(Book)
        const book = new Book();
        book.author=req.body.author;
        book.pages=req.body.pages;
        book.title=req.body.title;
        const jogos = await compras.manager.save(book)
        return res.json(jogos)
    }
    async createUser(req: Request, res:Response){
        const compras = await AppDataSource.manager.getRepository(User)
        const user =  new User();

        user.age = req.body.age
        user.name = req.body.name

        const jogos = await compras.manager.save(user)
        return res.json(jogos).status(201)
    }

    async findAll(req: Request, res:Response){
        return res.json(await bookRepo.find())
    }

    async delete(req: Request, res:Response){
        return res.json(await bookRepo.delete(req.params.id))
    }

    async findOne(req: Request, res:Response){
        return res.json(await bookRepo.findBy({id: parseInt(req.params.id)}))

    }
    async update(req: Request, res: Response){
        const book = new Book();
        
        book.author=req.body.author;
        book.pages=req.body.pages;
        book.title=req.body.title;
        return res.json(await bookRepo.update(req.params.id,book))
    }
}