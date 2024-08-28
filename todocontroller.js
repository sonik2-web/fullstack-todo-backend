const express = require('express');
const router = express.Router();
const todomodel = require('../models/todomodel');

// GET: Fetch all todos
module.exports.gettodo = async (req, res) => {
    try {
        const todos = await todomodel.find();
        res.send(todos);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch todos' });
    }
};

// POST: Save a new todo
module.exports.savetodo = async (req, res) => {
    const { text } = req.body;

    try {
        const newTodo = await todomodel.create({ text });
        console.log("Added successfully...");
        console.log(newTodo);
        res.send(newTodo);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Failed to add todo' });
    }
};

// PUT: Update a todo
module.exports.updatetodo = async (req, res) => {
    const { id, text } = req.body;

    try {
        const updatedTodo = await todomodel.findByIdAndUpdate(id, { text }, { new: true });
        if (updatedTodo) {
            res.send("Updated successfully");
        } else {
            res.status(404).send({ error: 'Todo not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Failed to update todo' });
    }
};

// DELETE: Delete a todo
module.exports.deletetodo = async (req, res) => {
    const { id } = req.body;

    try {
        const deletedTodo = await todomodel.findByIdAndDelete(id);
        if (deletedTodo) {
            res.send("Deleted successfully");
        } else {
            res.status(404).send({ error: 'Todo not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Failed to delete todo' });
    }
};

// Add routes to the router
router.get('/todos', module.exports.gettodo);
router.post('/todos', module.exports.savetodo);
router.put('/todos', module.exports.updatetodo);
router.delete('/todos', module.exports.deletetodo);

module.exports = router;
