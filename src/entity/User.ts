import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    age: number

}
