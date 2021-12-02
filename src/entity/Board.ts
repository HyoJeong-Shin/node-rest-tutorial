import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Comment} from './Comment'

@Entity()   // 테이블에 해당 // 테이블 명을 변경하고자 한다면 괄호안에 명시
export class Board {
    @PrimaryGeneratedColumn()   // primary 키를 자동으로 생성해주는 어노테이션
    id: number

    @Column({length: 100})  // 테이블 필드를 생성해주는 필드, 속성은 ()안에 명시
    title: string

    @Column("text")     // text type
    content: string

    @CreateDateColumn()     // current_timestamp 설정
    created: Date

    @UpdateDateColumn()     // on update current_timestamp 설정
    updated: Date

    // Board 테이블은 여러 개의 comment 가짐
    @OneToMany(type => Comment, comment=> comment.board )
    comments: Comment[]
}
