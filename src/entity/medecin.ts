import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Medecin extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    specialite: string;

    @Column()
    coordonnees: string;

    // Ajoutez d'autres champs pertinents ici
}
