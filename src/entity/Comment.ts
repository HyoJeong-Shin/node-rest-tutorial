import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Board} from './Board'
@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    content: string

    @CreateDateColumn()
    created: Date

    @UpdateDateColumn()
    updated: Date
    짐
    // comment는 하나의 board 가짐
    @ManyToOne(type => Board, board => board.comments, {onDelete: 'CASCADE', onUpdate:"CASCADE"})
    board: Board
}