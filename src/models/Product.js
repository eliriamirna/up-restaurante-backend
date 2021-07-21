import { v4 as uuid } from "uuid";

export default class Product {
  constructor({ product_id, name, description, value, image_url }) {
    this.id = uuid();
    this.name = name;
    this.product_id = product_id;
    this.description = description;
    this.value = value;
    this.image_url = image_url;
  }
}
