    // import express
import express from "express";

    // import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controller";

    // init express router
const router = express.Router();

    // Get all products
router.get('/products', showProducts);

    // Get single product   
router.get('/product/:id', showProductById);

    // Create new product
router.post('/products', createProduct);

    // Update a product 
router.put('/product/:id', updateProduct);

    // Delete a product
router.delete('/product/:id', deleteProduct);

    // export default router
export default router;