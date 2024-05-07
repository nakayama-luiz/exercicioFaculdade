import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Book {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    title: string

    @Column()
    author:string

    @Column()
    pages: number

}
