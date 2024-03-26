import { MigrationInterface, QueryRunner } from "typeorm"
import {fakeMedecin} from "../faker/medecin";
import {Medecin} from "../entity/medecin";

export class Medecin1711120300391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const medecins = fakeMedecin();
        await queryRunner.manager.save(Medecin, medecins);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
