const connection = require("../config/database");

let GetProduct = async (req, res) => {
    let [results, fields] = await connection.query(`select * from DB_ctd.product`);
    return results;
};
let GetProduct_item = async(id) => {
    let [results,fields] = await connection.query(`select product.*, product_item.* from product, product_item where product.id = product_item.myid and  product_item.myid = ?`,[id]);
    return results;
};
let GetCart = async(id) => {
    let [results,fields] = await connection.query(`select product.*, product_item.* from product, product_item where product.id = product_item.myid and  product_item.myid = ?`,[id])
  let [results_1, fields_1] = await connection.query(`insert into cart values(?, ?, ?, ?)`, [id, results[0].name, results[0].price_left, results[0].link_image1]);
  let [results_2, fields_2] = await connection.query(`select cart.* from cart`);
  return results_2;
};
let getDelete = async(id) => {
    let [results, fields] = await connection.query(`delete from cart where id = ?`, [id]);
    return results;
};
let getDeleteAfter = async() => {
    let [results_2, fields_2] = await connection.query(`select cart.* from cart`);
    return results_2;
};
module.exports = {
    GetProduct,
    GetProduct_item,
    GetCart,
    getDelete,
    getDeleteAfter,
};