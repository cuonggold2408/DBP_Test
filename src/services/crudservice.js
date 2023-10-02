const connection = require("../config/database");

let GetProduct = async (req, res) => {
  let [results, fields] =
    await connection.query(`select SmartPhone.*, SmartPhone_Detail.price_left, SmartPhone_Detail.price_right
    from SmartPhone
    inner join SmartPhone_Detail
    on SmartPhone.id = SmartPhone_Detail.id and SmartPhone_Detail.color = "black";`);
  return results;
};
let GetProduct_item = async (id) => {
  let [results, fields] = await connection.query(
    `select a.* , SmartPhone_Detail.price_left as left_white, SmartPhone_Detail.price_right as right_white, SmartPhone_Detail.link as link_white
    from SmartPhone_Detail, (select SmartPhone.id,SmartPhone.name, SmartPhone.name_detail, SmartPhone.ma_sp, SmartPhone_Detail.price_left, SmartPhone_Detail.price_right,SmartPhone_Detail.link
    from SmartPhone
    inner join SmartPhone_Detail
    on SmartPhone.id = SmartPhone_Detail.id and SmartPhone.id = ? and SmartPhone_Detail.color = "black") as a
    where SmartPhone_Detail.id = ? and SmartPhone_Detail.color = "white";
    `,
    [id, id]
  );
  return results;
};
let GetCart = async (id, color) => {
  let [results_1, fields_1] = await connection.query(
    `insert into Cart values(?, 1, ?)`,
    [id, color]
  );
  let [results_2, fields_2] = await connection.query(`select *
  from DB_ctd.cart
  inner join DB_ctd.smartPhone
  where cart.smartphone_id = smartPhone.id;`);
  return results_2;
};
let getDelete = async (id) => {
  let [results, fields] = await connection.query(
    `delete from cart where smartphone_id = ?`,
    [id]
  );
  return results;
};
let getDeleteAfter = async () => {
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
