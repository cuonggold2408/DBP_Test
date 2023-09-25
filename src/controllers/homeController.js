const express = require("express");
const connection = require("../config/database");
const {GetProduct, GetProduct_item } = require("../services/crudservice");


const getHomepage = async (req, res) =>{
    let results = await GetProduct();
    return res.render("home.ejs", {product: results});
};
const getProductDetail = async (req,res) =>{
    let id = req.params.id;
    let results = await GetProduct_item(id);
    return res.render("link-product.ejs", {product_item: results});

};

module.exports = {
    getHomepage,
    getProductDetail,
};