const connection = require("../config/database");

let GetProduct = async (req, res) => {
    let [results, fields] = await connection.query(`select * from DB_ctd.product`);
    return results;
};
let GetProduct_item = async(id) => {
    let [results,fields] = await connection.query(`select product.*, product_item.* from product, product_item where product.id = product_item.myid and  product_item.myid = ?`,[id]);
    return results;
};
module.exports = {
    GetProduct,
    GetProduct_item,
};