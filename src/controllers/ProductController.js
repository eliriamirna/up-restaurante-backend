import productRepository from "../repositories/productRepository";

class ProductController {
  async show(req, res) {
    const repository = await productRepository();
    const products = await repository.find();

    return res.json(products);
  }
}

export { ProductController };
