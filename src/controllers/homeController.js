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
} = require("../services/crudservice");

// Export the set object
let color = "black";
const getHomepage = async (req, res) => {
  color = "black";
  let results = await GetProduct();
  let results1 = await getDeleteAfter();
  let results2 = await getAllCustomer();
  return res.render("home.ejs", {
    product: results,
    results1: results1,
    customer: results2,
  });
};
const getProductDetail = async (req, res) => {
  let id = req.params.id;
  let results = await GetProduct_item(id);
  let results1 = await getDeleteAfter();
  return res.render("link-product.ejs", {
    product_item: results,
    results1: results1,
    color: color,
  });
};

const getCart1 = async (req, res) => {
  let id = req.params.id;
  let results = await GetCart(id, color);

  res.redirect("/cart");
};
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  let color1 = req.params.color;
  let results = await getDelete(id, color1);
  res.redirect("/cart");
};
const getCartAfter = async (req, res) => {
  let results = await getDeleteAfter();
  return res.render("cart.ejs", { cart: results });
};
const getAddtocart = async (req, res) => {
  let id = req.params.id;
  let results_1 = await GetCart(id, color);
  res.redirect(`/ProductDetail/${id}`);
};
const getColor = async (req, res) => {
  color = req.body.color;
  const id = req.params.id;
  console.log(color);
  res.redirect(`/ProductDetail/${id}`);
};

const getSellProduct = async (req, res) => {
  let results = await getSell();
  console.log(results);
  return res.render("sell.ejs", { cart: results });
};

// const getCustomer = async (req, res) => {
//   const { name, email, password } = req.body;
//   let [results, fields] = await connection.query(
//     `insert into Customer (email,fullname,password) values (?, ?, ?)`,
//     [email, name, password]
//   );
// };

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

    res.status(201).send("Customer created successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
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
    return res.status(200).send("Login successful");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
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
};
