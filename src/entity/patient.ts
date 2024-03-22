import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Patient extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    age: number;

    @Column()
    genre: string;

    @Column()
    diagnostic: string;

    @Column()
    coordonnees: string;

    // Ajoutez d'autres champs pertinents ici
}
