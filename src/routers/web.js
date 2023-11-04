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
  getCustomer,
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
  const {value, id, color} = req.body; 
  console.log(value);
  console.log(id);
  console.log(color);
  const query = "update Cart set SmartPhone_Quantity = ? where SmartPhone_id = ? and color = ?";

  connection.query(query, [value, id, color], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    return res.status(200).send("Data saved successfully");
  });
});
router.post("/save-to-database-customer", getCustomer);
module.exports = router;
