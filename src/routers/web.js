const express = require("express");
const {getHomepage,getProductDetail,getCart1,deleteProduct, getCartAfter, getAddtocart } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ProductDetail/:id", getProductDetail);
router.get("/cart/:id", getCart1);
router.get("/cart", getCartAfter);
router.get("/addToCart/:id", getAddtocart);
router.get("/delete/:id", deleteProduct);
module.exports = router;
