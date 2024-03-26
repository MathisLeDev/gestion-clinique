import { MigrationInterface, QueryRunner } from "typeorm"
import {fakeChambre} from "../faker/chambre";
import {Chambre} from "../entity/chambre";

export class Chambre1711478794720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const chambres = fakeChambre();
        await queryRunner.manager.save(Chambre, chambres);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
