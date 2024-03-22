import { MigrationInterface, QueryRunner } from "typeorm"
import {fakeMaladie} from "../faker/maladie";
import {Maladie} from "../entity/maladie";

export class Maladie1711122861159 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const maladies = fakeMaladie();
        await queryRunner.manager.save(Maladie, maladies);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
