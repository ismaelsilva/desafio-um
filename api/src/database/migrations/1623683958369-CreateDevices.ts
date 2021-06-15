import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDevices1623683958369 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "devices",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isNullable: false
                    },
                    {
                        name: "idCategory",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name:"color",
                        type: "varchar"
                    },
                    {
                        name:"partNumber",
                        type: "varchar"
                    }
                ]
            })
        );
        await queryRunner.createForeignKey(
            'devices',
            new TableForeignKey({
              columnNames: ['idCategory'],
              referencedTableName: 'categories',
              referencedColumnNames: ['id']
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("devices");
    }

}
