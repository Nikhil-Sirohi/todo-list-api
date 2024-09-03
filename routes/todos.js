const express = require("express");

const {
  createItem,
  updateItem,
  deleteItem,
  getAllItems,
} = require("../controllers/postControllers");

const router = express.Router();

router.post("/point", createItem);
router.get("/point", getAllItems);
router.put("/point/:id", updateItem);
router.delete("/point/:id", deleteItem);

module.exports = router;
