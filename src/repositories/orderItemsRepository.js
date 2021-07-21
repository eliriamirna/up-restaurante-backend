import { getRepository } from "typeorm";

const orderItemsRepository = async() => {

    const orderItemsRepository = await getRepository("order_items");

    return orderItemsRepository
}

export default orderItemsRepository;