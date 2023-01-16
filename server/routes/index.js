const express = require('express')
const router = express.Router()
const TodoModel = require('../models/todo')

router.get('/todo', async (req, res) => {
	const todoList = await TodoModel.find({})
	res.send(todoList)
})

router.put('/todo', async (req, res) => {
	const { id } = req.query
	const { title, status } = req.body
	const todo = await TodoModel.findByIdAndUpdate(id, { title, status })
	res.send(todo)
})

router.post('/todo', async (req, res) => {
	const { title } = req.body
	const todo = await TodoModel.create({ title })
	res.send(todo)
})

router.delete('/todo', async (req, res) => {
	const { id } = req.query
	const todo = await TodoModel.findByIdAndDelete(id)
	res.send(todo)
})

module.exports = router