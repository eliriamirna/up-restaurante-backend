import { Router } from "express";
import { ProductController } from "./controllers/ProductController";
import { OrderController } from "./controllers/OrderController";

const routes = Router();

const productController = new ProductController();
const orderController = new OrderController();

routes.get("/order", orderController.show)
routes.post("/order", orderController.create)
routes.put("/order/:orderId", orderController.update)


routes.get("/product", productController.show)

export { routes };