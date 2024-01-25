// [SECTION] Dependencies and Modules
const express = require("express");
const cartController = require("../controllers/cartController");
const { verify, verifyAdmin } = require("../auth");

const router = express.Router();

// ROUTES

// Get cart
router.get("/get-cart", verify, cartController.getCart);

// Add to cart route
router.post("/add-to-cart", verify, cartController.addToCart);

// Change product quantities route
router.patch("/update-cart-quantity", verify, cartController.updateCartQuantity);

// [SECTION] Export Route System
module.exports = router;
