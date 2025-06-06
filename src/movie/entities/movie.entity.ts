import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Genre {
    ACTION = 'action',
    DRAMA = 'drama'
}


@Entity('movies')
export class MovieEntity {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar'
    })
    title: string

    @Column({
        name: 'release_year',
        type: 'int'
    })
    releaseYear: number

    @Column({
        name: 'is_available',
        type: 'boolean',
        default: false
    })
    isAvailable: boolean

    @Column({
        type: 'enum',
        enum: Genre
    })
    genre: Genre

    @CreateDateColumn({
        name: 'created_at',
        type: 'date'
    })
    createdAt: Date

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'date'
    })
    updatedAt: Date

}