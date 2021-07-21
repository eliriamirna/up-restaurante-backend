import { Table } from "typeorm";

export class CreateOrder1626312224124 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "customer_order",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "customer_name",
            type: "varchar",
          },
          {
            name: "total_value",
            type: "decimal",
          },
          {
            name: "notes",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "payment_type",
            type: "varchar",
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
    await queryRunner.dropTable("customer_order");
  }
}
