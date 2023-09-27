const connection = require("../config/database");

let GetProduct = async (req, res) => {
    let [results, fields] = await connection.query(`select * from DB_ctd.smartPhone`);
    return results;
};
let GetProduct_item = async(id) => {
    let [results,fields] = await connection.query(`select * from DB_ctd.smartPhone where id = ?`,[id]);
    return results;
};
let GetCart = async(id) => {
  let [results_1, fields_1] = await connection.query(`insert into DB_ctd.cart values(?)`,[id]);
  let [results_2, fields_2] = await connection.query(`select *
  from DB_ctd.cart
  inner join DB_ctd.smartPhone
  where cart.smartphone_id = smartPhone.id;`);
  return results_2;
};
let getDelete = async(id) => {
    let [results, fields] = await connection.query(`delete from cart where smartphone_id = ?`, [id]);
    return results;
};
let getDeleteAfter = async() => {
    let [results_2, fields_2] = await connection.query(`select *
    from DB_ctd.cart
    inner join DB_ctd.smartPhone
    where cart.smartphone_id = smartPhone.id;`);
    return results_2;
};
module.exports = {
    GetProduct,
    GetProduct_item,
    GetCart,
    getDelete,
    getDeleteAfter,
};