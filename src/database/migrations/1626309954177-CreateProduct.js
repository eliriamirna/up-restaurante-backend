import { Table } from "typeorm";

export class CreateProduct1626309954177 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "product",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "product_id",
            type: "varchar",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "image_url",
            type: "varchar",
          },
          {
            name: "value",
            type: "decimal",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "datetime('now','localtime')",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "datetime('now','localtime')",
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("product");
  }
}
