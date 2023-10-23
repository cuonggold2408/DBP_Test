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
  getSellProduct,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/ProductDetail/:id", getProductDetail);
router.get("/cart/:id", getCart1);
router.get("/cart", getCartAfter);
router.get("/addToCart/:id", getAddtocart);
router.get("/delete/:id/:color", deleteProduct);
router.get("/sell", getSellProduct);
router.post("/getColor/:id", getColor);
router.post("/save-to-database", (req, res) => {
  const value = req.body.value;
  const query = "INSERT INTO so (id) VALUES (?)";

  connection.query(query, [value], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    return res.status(200).send("Data saved successfully");
  });
});
module.exports = router;
