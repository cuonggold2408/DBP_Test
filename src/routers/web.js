const express = require("express");
const {
  getHomepage,
  getProductDetail,
  getCart,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ProductDetail/:id", getProductDetail);
router.get("/cart/:id", getCart);

module.exports = router;
