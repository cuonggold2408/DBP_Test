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
const getCustomer = async (req, res) => {
  const {name, email, password} = req.body; 
  let [results, fields] = await connection.query(
    `insert into Customer (email,fullname,password) values (?, ?, ?)`,
    [email, name, password]
  );
}

module.exports = {
  getHomepage,
  getProductDetail,
  getCart1,
  deleteProduct,
  getCartAfter,
  getAddtocart,
  getColor,
  getSellProduct,
  getCustomer
};
