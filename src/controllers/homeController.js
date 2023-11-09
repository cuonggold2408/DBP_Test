const express = require("express");
const connection = require("../config/database");

const {
  GetProduct,
  GetProduct_item,
  GetCart,
  getDelete,
  getDeleteAfter,
  getColor1,
  getSell,
  getAllCustomer,
  getSum,
  getName
} = require("../services/crudservice");

// Export the set object
let color = "black";
let id_Customer = 0;
const getHomepage = async (req, res) => {
  color = "black";
  let results = await GetProduct();
  let results1 = await getDeleteAfter(id_Customer);
  let results2 = await getAllCustomer();
  let Name = await getName(id_Customer);
  return res.render("home.ejs", {
    product: results,
    results1: results1,
    customer: results2,
    Name: Name,
  });
};
const getProductDetail = async (req, res) => {
  let id = req.params.id;
  let results = await GetProduct_item(id);
  let results1 = await getDeleteAfter(id_Customer);
  return res.render("link-product.ejs", {
    product_item: results,
    results1: results1,
    color: color,
  });
};

const getCart1 = async (req, res) => {
  let id = req.params.id;
  let results = await GetCart(id, color, id_Customer);

  res.redirect("/cart");
};
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  let color1 = req.params.color;
  let results = await getDelete(id, color1, id_Customer);
  res.redirect("/cart");
};
const getCartAfter = async (req, res) => {
  let results = await getDeleteAfter(id_Customer);
  return res.render("cart.ejs", { cart: results });
};
const getAddtocart = async (req, res) => {
  let id = req.params.id;
  let results_1 = await GetCart(id, color, id_Customer);
  res.redirect(`/ProductDetail/${id}`);
};
const getColor = async (req, res) => {
  color = req.body.color;
  const id = req.params.id;
  console.log(color);
  res.redirect(`/ProductDetail/${id}`);
};

const getSellProduct = async (req, res) => {
  let results = await getSell(id_Customer);
  let product = await getSum(id_Customer);
  console.log(results);
  return res.render("sell.ejs", { cart: results, product: product });
};

const getCheck = async (req, res) => {
  return res.render("check.ejs");
};

const getCustomer = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [existingCustomer] = await connection.execute(
      `SELECT email FROM Customer WHERE email = ?`,
      [email]
    );

    if (existingCustomer.length > 0) {
      return res.status(409).send("Email already exists");
    }

    const [results] = await connection.execute(
      `INSERT INTO Customer (email, fullname, password) VALUES (?, ?, ?)`,
      [email, name, password]
    );
    const query = `SELECT * FROM Customer WHERE email = ?`;
    const [user] = await connection.execute(query, [email]);
    let [result, fields] = await connection.query(
      `insert into discount(id_Customer, consume, rank) values(?, ?, ?)`,
      [user[0].id, 0, "bronze"]
    );

    res.status(201).send("Customer created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const gettransport = async (req, res) => {
  const { name, phone, email, province, district, note } = req.body;
  let [results, fields] = await connection.query(
    `insert into Transport(id_Customer, Name, email, phone, province, district, note) 
  values(?, ?, ?, ?, ?, ?, ?)`,
    [id_Customer, name, phone, email, province, district, note]
  );

  // tinh tong tien
  const query = `select sum(Cart.price_left * Cart.SmartPhone_Quantity) as sum
  from (select sd.link, sd.price_left, sd.price_right, ca.SmartPhone_Quantity, tmp.name, sd.id, tmp.name_detail
  from Cart as ca, SmartPhone_Detail as sd, SmartPhone as tmp
  where ca.SmartPhone_id = sd.id and ca.color = sd.color and tmp.id = ca.SmartPhone_id and ca.id_Customer = ?) as Cart;`;
  const [user] = await connection.execute(query, [id_Customer]);
  let [results1, fields1] = await connection.query(
    `update discount
  set consume = consume + ?
  where id_Customer = ?;`,
    [user[0].sum, id_Customer]
  );

  let [results2, fields2] = await connection.query(
    `update discount
  set rank = 
  (SELECT 
      CASE
          WHEN consume <= 30000000 THEN "bronze"
          WHEN consume > 30000000 AND consume <= 45000000 THEN "silver"
          WHEN consume > 45000000 AND consume <= 70000000 THEN "gold"
          ELSE "diamond"
      END) 
  where id_Customer = ?;`,
    [id_Customer]
  );
};
const checkLoginCredentials = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `SELECT * FROM Customer WHERE email = ?`;
    const [user] = await connection.execute(query, [email]);

    if (user.length === 0) {
      return res.status(401).send("No user found with this email.");
    }

    if (password !== user[0].password) {
      return res.status(401).send("Password is incorrect.");
    }
    id_Customer = user[0].id;
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const setId_Customer = (req, res) => {
    id_Customer = 0;
    console.log(id_Customer);
    res.redirect("/");
};
module.exports = {
  getHomepage,
  getProductDetail,
  getCart1,
  deleteProduct,
  getCartAfter,
  getAddtocart,
  getColor,
  getSellProduct,
  getCustomer,
  checkLoginCredentials,
  gettransport,
  getCheck,
  setId_Customer,
};
