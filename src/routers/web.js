const express = require('express');
const { getHomepage, getProductDetail } = require('../controllers/homeController');
const router = express.Router();

router.get("/", getHomepage);
router.get("/ProductDetail/:id", getProductDetail);


module.exports = router;