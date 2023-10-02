const express = require("express");
const connection = require("../config/database");
const {
  GetProduct,
  GetProduct_item,
  GetCart,
  getDelete,
  getDeleteAfter,
} = require("../services/crudservice");

// Export the set object
let color = "";
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
  console.log("getCard1 " + color);
  let results = await GetCart(id, color);

  res.redirect("/cart");
};
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  let results = await getDelete(id);
  res.redirect("/cart");
};
const getCartAfter = async (req, res) => {
  let results = await getDeleteAfter();
  return res.render("cart.ejs", { cart: results });
};
const getAddtocart = async (req, res) => {
  let id = req.params.id;
  let results_1 = await GetCart(id);
  console.log("getAddtocart" + color);
  res.redirect(`/ProductDetail/${id}`);
};
const getColor = async (req, res) => {
  color = req.body.color;
  console.log("getColor" + color);
  const id = req.params.id;
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
  return res.render("link-product.ejs", { product_item: results });
};
module.exports = {
  getHomepage,
  getProductDetail,
  getCart1,
  deleteProduct,
  getCartAfter,
  getAddtocart,
  getColor,
};
