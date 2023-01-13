import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCustomer1673629478784 implements MigrationInterface {
    name = 'ChangeCustomer1673629478784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9a5f6868c96e0069e699f33e124\``);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`category_id\` \`category_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP FOREIGN KEY \`FK_e54c9a434e453a25cf998a9450b\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP FOREIGN KEY \`FK_32b6e478da3f612119ae05b3ab0\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` CHANGE \`product_id\` \`product_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` CHANGE \`purchase_id\` \`purchase_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`purchases\` DROP FOREIGN KEY \`FK_6b126c5c1c05fc81e93fc8d427a\``);
        await queryRunner.query(`ALTER TABLE \`purchases\` CHANGE \`customer_id\` \`customer_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_11d81cd7be87b6f8865b0cf7661\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`dni\``);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`dni\` varchar(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customers\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_9a5f6868c96e0069e699f33e124\` FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD CONSTRAINT \`FK_e54c9a434e453a25cf998a9450b\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD CONSTRAINT \`FK_32b6e478da3f612119ae05b3ab0\` FOREIGN KEY (\`purchase_id\`) REFERENCES \`purchases\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases\` ADD CONSTRAINT \`FK_6b126c5c1c05fc81e93fc8d427a\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_11d81cd7be87b6f8865b0cf7661\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_11d81cd7be87b6f8865b0cf7661\``);
        await queryRunner.query(`ALTER TABLE \`purchases\` DROP FOREIGN KEY \`FK_6b126c5c1c05fc81e93fc8d427a\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP FOREIGN KEY \`FK_32b6e478da3f612119ae05b3ab0\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP FOREIGN KEY \`FK_e54c9a434e453a25cf998a9450b\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_9a5f6868c96e0069e699f33e124\``);
        await queryRunner.query(`ALTER TABLE \`customers\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`dni\``);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`dni\` varchar(25) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_11d81cd7be87b6f8865b0cf7661\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases\` CHANGE \`customer_id\` \`customer_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`purchases\` ADD CONSTRAINT \`FK_6b126c5c1c05fc81e93fc8d427a\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` CHANGE \`purchase_id\` \`purchase_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` CHANGE \`product_id\` \`product_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD CONSTRAINT \`FK_32b6e478da3f612119ae05b3ab0\` FOREIGN KEY (\`purchase_id\`) REFERENCES \`purchases\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD CONSTRAINT \`FK_e54c9a434e453a25cf998a9450b\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`category_id\` \`category_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_9a5f6868c96e0069e699f33e124\` FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
