import { MigrationInterface, QueryRunner } from "typeorm"
import {fakepatient} from "../faker/patient";
import {Patient} from "../entity/patient";

export class Patient1711122118715 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const patients = fakepatient();
        await queryRunner.manager.save(Patient, patients);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
