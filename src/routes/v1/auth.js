const express = require("express");
const authController = require("../../app/controllers/auth");

const router = express.Router();

// first route
router.get("/", authController.FirstRoute);

module.exports = {
  baseUrl: "/auth",
  router,
};
  