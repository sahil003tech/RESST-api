const express = require("express");

const router = express.Router();
const { getallproduct, getallproducttest } = require("../controller/product");

router.route("/").get(getallproduct);
router.route("/test").get(getallproducttest);

module.exports = router;
