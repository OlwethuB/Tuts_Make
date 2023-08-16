    // import function from Product Model 
import {getProducts, getProductId, insertProduct, updateProductById, deleteProductById } from "../model/productModel.js"

    // Get all products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results)
        }
    })
}

    // Get single Product
export const getProductId = (req, res) => {
    getProductId(req.params.id, (err,results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

    // create a new Product 
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

    // Update Product 
export const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

    // Delete Product 
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}