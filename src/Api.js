import axios from 'axios'
const BASE_URL = 'http://localhost:9000'

const getAllTodo = async () => {
	const res = await axios.get(`${BASE_URL}/api/todo`)
	return res.data
}

const createTodo = async (title) => {
	const res = await axios.post(`${BASE_URL}/api/todo`, { title })
	return res.data
}

const removeTodo = async (id) => {
	const res = await axios.delete(`${BASE_URL}/api/todo?id=${id}`)
	return res.data
}

const updateTodo = async (id, body) => {
	const res = await axios.put(`${BASE_URL}/api/todo?id=${id}`, body)
	return res.data
}

export { getAllTodo, createTodo, removeTodo, updateTodo }