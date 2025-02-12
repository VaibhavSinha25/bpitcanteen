const express = require("express");
const router = express.Router();

const vendorController = require("../controllers/vendorController");
router.route("/").get(vendorController.getVendorInfo);
router.route("/:id").patch(vendorController.updateVendorInfo);

module.exports = router;
