import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "customer_order",
  tableName: "customer_order",
  columns: {
    id: {
      primary: true,
      type: "uuid",
    },
    customer_name: {
      type: "varchar",
    },
    status: {
      type: "varchar",
    },
    notes: {
      type: "varchar",
    },
    total_value: {
      type: "decimal",
    },
    payment_type: {
      type: "varchar",
    },
    updated_at: {
      type: "date",
      updateDate: true,
    },
    created_at: {
      type: "date",
      createDate: true,
    },
  },
  relations: {
    orderItems: {
      type: "one-to-many",
      target: "order_items",
      inverseSide: "order",
    },
  },
});
