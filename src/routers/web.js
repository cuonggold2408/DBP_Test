const express = require("express");
const connection = require("../config/database");
const {
  getHomepage,
  getProductDetail,
  getCart1,
  deleteProduct,
  getCartAfter,
  getAddtocart,
  getColor,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ProductDetail/:id", getProductDetail);
router.get("/cart/:id", getCart1);
router.get("/cart", getCartAfter);
router.get("/addToCart/:id", getAddtocart);
router.get("/delete/:id/:color", deleteProduct);
router.post("/getColor/:id", getColor);
module.exports = router;
