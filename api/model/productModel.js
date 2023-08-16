    // Import connection
import db from "../config";

    // Get all products
export const getProducts = (result) => {
    db.query("SELECT * FROM product", (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

    // Get single product 
export const getProduct = (id, result) => {
    db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

    // Insert product into database 
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

    // Update Product to database 
export const updateProductById = (data, id, result) => {
    db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

    // Delete a product from database 
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) =>{
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}