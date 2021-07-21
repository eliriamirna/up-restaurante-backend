import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "product",
  tableName: "product",
  columns: {
    id: {
      primary: true,
      type: "uuid",
    },
    name: {
      type: "varchar",
    },
    product_id: {
      type: "varchar",
    },
    description: {
      type: "varchar",
    },
    image_url: {
      type: "varchar",
    },
    value: {
      type: "decimal",
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
    orderItem: {
      type: "one-to-many",
      target: "order_items",
      inverseSide: "product",
    },
  },
});
