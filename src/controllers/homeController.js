const express = require("express");
const connection = require("../config/database");
const { GetProduct, GetProduct_item, GetCart, getDelete, getDeleteAfter } = require("../services/crudservice");
const color = require('../public/js/choose-color/app');
console.log(color);
// Export the set object

const getHomepage = async (req, res) => {
  let results = await GetProduct();
  return res.render("home.ejs", { product: results });
};
const getProductDetail = async (req, res) => {
  let id = req.params.id;
  let results = await GetProduct_item(id);
  return res.render("link-product.ejs", { product_item: results });
};

const getCart1 = async (req, res) => {
  let id = req.params.id;
  let results = await GetCart(id);
  return res.render("cart.ejs", {cart : results});
};
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  let results = await getDelete(id);
  res.redirect("/cart");
};
const getCartAfter = async (req, res) => {
  let results = await getDeleteAfter()
  return res.render("cart.ejs", {cart : results});
}
const getAddtocart = async (req, res) => {
  let id = req.params.id;
  let results_1 = await GetCart(id);
  res.redirect(`/ProductDetail/${id}`);

};
module.exports = {
  getHomepage,
  getProductDetail,
  getCart1,
  deleteProduct,
  getCartAfter,
  getAddtocart,
};
