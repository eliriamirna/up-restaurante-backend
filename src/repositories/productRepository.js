import { getRepository } from "typeorm";

const productRepository = async () => {
  const productRepository = await getRepository("product");

  return productRepository;
};

export default productRepository;
