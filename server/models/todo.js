const mongoose = require('mongoose')

const TodoItemSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	status:{
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model('todo', TodoItemSchema)
