import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"
import { Medecin } from "./medecin";
import {Chambre} from "./chambre";
import {Patient} from "./patient";


@Entity()
export class Assignation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Medecin)
    doctor: Medecin;

    @ManyToOne(() => Patient)
    patient: Patient;

    @ManyToOne(() => Chambre)
    room: Chambre;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dateAssignation: Date;

    @Column({ type: "timestamp", nullable: true })
    dateSortie: Date;

    // Ajoutez d'autres champs pertinents ici
}
