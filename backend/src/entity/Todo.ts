import { IsNotEmpty } from 'class-validator'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsNotEmpty()
    title: string

    @Column()
    note: string

    @Column()
    @IsNotEmpty()
    duedate: string
}
