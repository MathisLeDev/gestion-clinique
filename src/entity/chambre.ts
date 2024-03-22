import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Chambre extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numeroDeChambre: string;

    @Column()
    typeDeChambre: string;

    @Column()
    statutDeDisponibilite: string;

    // Ajoutez d'autres champs pertinents ici
}
