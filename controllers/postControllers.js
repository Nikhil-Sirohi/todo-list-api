const todo = require("../models/Todo");

/* CREATE A NEW TODO ITEM */

const createItem = async (req, res) => {
  try {
    const item = new todo({
      title: req.body.title,
      completed: req.body.completed,
    });

    await item.save();
    res.status(201).send(item);
  } catch (error) {
    console.error("Error creating todo:", error.message);
    res.status(500).send({ error: "Failed to create new item" });
  }
};

/* DELETE A NEW TODO ITEM */

const deleteItem = async (req, res) => {
  try {
    await todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: "Failed to delete a item" });
  }
};
/* UPDATE A NEW TODO ITEM */
const updateItem = async (req, res) => {
  try {
    const item = await todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send({ error: "Failed to update item" });
  }
};

/* GET ALL TODO ITEMS */

const getAllItems = async (req, res) => {
  try {
    const items = await todo.find();
    res.status(200).send(items);
  } catch (error) {
    console.error("Error creating todo:", error.message);
    res.status(500).send({ error: "Failed to fetch items" });
  }
};

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  getAllItems,
};
