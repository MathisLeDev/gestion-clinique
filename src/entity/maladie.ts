import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Maladie extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    categorie: string;

    @Column()
    gravite: string;

    // Ajoutez d'autres champs pertinents ici
}
