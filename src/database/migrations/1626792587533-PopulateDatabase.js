import { v4 as uuid } from "uuid";

export class PopulateDatabase1626792587533 {
  async up(queryRunner) {
    await queryRunner.query(
      `INSERT INTO product (id, product_id, name, description, value, image_url) VALUES 
      (
        '${uuid()}', 
        '1', 
        'Frango com crosta de castanha de caju', 
        'Peito de frango sem antibiótico, castanha de cajú, azeite extra virgem, sal, pimenta-do-reino.', 
        13.90, 
        'http://localhost:3333/public/item1.jpg'
      )`
    );
    await queryRunner.query(
      `INSERT INTO product (id, product_id, name, description, value, image_url) VALUES
      (
        '${uuid()}', 
        '2', 
        'Hambúrguer de fraldinha        ', 
        'Carne moída (fraldinha), sal.', 
        16.50, 
        'http://localhost:3333/public/item2.jpg'
      )`
    );
    await queryRunner.query(
      `INSERT INTO product (id, product_id, name, description, value, image_url) VALUES
      (
        '${uuid()}', 
        '3', 
        'Almôndega de carne', 
        'Tomate orgânico, carne bovina, aveia em flocos, cebola orgânica, gema de ovo, gordura bovina, alho, cebolinha orgânica, sal, azeite extra virgem, pimenta do reino, orégano.', 
        11.70, 
        'http://localhost:3333/public/item3.jpg'
      )`
    );
    await queryRunner.query(
      `INSERT INTO product (id, product_id, name, description, value, image_url) VALUES
      (
        '${uuid()}', 
        '4', 
        'Ravioli integral de mussarela de búfala', 
        'Farinha de trigo branca, mussarela de búfala, farinha de trigo integral, ricota, espinafre, ovo em pó, manjericão e sal', 
        14.90, 
        'http://localhost:3333/public/item4.jpg'
      )`
    );
    await queryRunner.query(
      `INSERT INTO product (id, product_id, name, description, value, image_url) VALUES
      (
        '${uuid()}', 
        '5', 
        'Quibe assado com castanha do Pará', 
        'Carne bovina, trigo para quibe, cebola orgânica, limão tahiti orgânico, castanha do pará , sal, azeite extra virgem, hortelã orgânica, pimenta-do-reino.', 
        18.00, 
        'http://localhost:3333/public/item5.jpg'
      )`
    );
    await queryRunner.query(
      `INSERT INTO product (id, product_id, name, description, value, image_url) VALUES
      (
        '${uuid()}', 
        '6', 
        'Bolinha de abóbora e carne com chia', 
        'Abóbora japonesa orgânica, carne bovina, cebola orgânica, chia, queijo parmesão, farinha de coco, azeite extra virgem, páprica doce, sal, pimenta-do-reino.', 
        8.50, 
        'http://localhost:3333/public/item6.jpg'
      )`
    );
    await queryRunner.query(
      `INSERT INTO product (id, product_id, name, description, value, image_url) VALUES
      (
        '${uuid()}', 
        '7', 
        'Bolinho de cenoura', 
        'Cenoura, farinha de arroz integral, açúcar demerara, chocolate 70%, gema de ovo, clara de ovo, polvilho doce, óleo de coco, fermento em pó.', 
        5.90, 
        'http://localhost:3333/public/item7.jpg'
      )
      `
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DELETE FROM product WHERE product_id = '1'`);
    await queryRunner.query(`DELETE FROM product WHERE product_id = '2'`);
    await queryRunner.query(`DELETE FROM product WHERE product_id = '3'`);
    await queryRunner.query(`DELETE FROM product WHERE product_id = '4'`);
    await queryRunner.query(`DELETE FROM product WHERE product_id = '5'`);
    await queryRunner.query(`DELETE FROM product WHERE product_id = '6'`);
    await queryRunner.query(`DELETE FROM product WHERE product_id = '7'`);
  }
}
