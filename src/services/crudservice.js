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
    `INSERT INTO Cart (SmartPhone_id, SmartPhone_Quantity,color)
    SELECT ?, 1, ?
    ON DUPLICATE KEY UPDATE SmartPhone_Quantity = SmartPhone_Quantity + 1;`,
    [id, color]
  );
  let [results_2, fields_2] =
    await connection.query(`select SmartPhone.name, SmartPhone_Detail.link, SmartPhone_Detail.price_left, SmartPhone.id, Cart.color,Cart.SmartPhone_Quantity
  from (Cart
  inner join SmartPhone on SmartPhone.id = Cart.SmartPhone_id)
  inner join SmartPhone_Detail on SmartPhone_Detail.color = Cart.color and SmartPhone_Detail.id = Cart.SmartPhone_id;`);
  return results_2;
};
let getDelete = async (id, color) => {
  let [results, fields] = await connection.query(
    `delete from Cart where SmartPhone_id = ? and color = ?;`,
    [id, color]
  );
  return results;
};
let getDeleteAfter = async () => {
  let [results_2, fields_2] =
    await connection.query(`select SmartPhone.name, SmartPhone_Detail.link, SmartPhone_Detail.price_left, SmartPhone.id, Cart.color, Cart.SmartPhone_Quantity
  from (Cart
  inner join SmartPhone on SmartPhone.id = Cart.SmartPhone_id)
  inner join SmartPhone_Detail on SmartPhone_Detail.color = Cart.color and SmartPhone_Detail.id = Cart.SmartPhone_id;`);
  return results_2;
};
let getColor1 = async (id) => {
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
let getSell = async () => {
  let [results, fields] = await connection.query(`select sd.link, sd.price_left, sd.price_right, ca.SmartPhone_Quantity, tmp.name, sd.id, tmp.name_detail
    from Cart as ca, SmartPhone_Detail as sd, SmartPhone as tmp
    where ca.SmartPhone_id = sd.id and ca.color = sd.color and tmp.id = ca.SmartPhone_id;`);
    return results;
}
let getAllCustomer = async () => {
  let [results, fields] = await connection.query(`select id, email, fullname, password from Customer`);
  return results;
}
module.exports = {
  GetProduct,
  GetProduct_item,
  GetCart,
  getDelete,
  getDeleteAfter,
  getColor1,
  getSell,
  getAllCustomer,
};
