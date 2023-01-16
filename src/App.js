import React, { useEffect, useState, Fragment } from 'react'
import Header from './Components/Header/Header'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/AddTodo/TodoList/TodoList'
import './Styles/App.css'
import { getAllTodo } from './Api'
import { Spin } from 'antd'

function App() {

	const [todo, setTodo] = useState([])
	const [isLoading, setLoading] = useState(true)

	const handleGetAllTodo = async () => {
		const newTodo = await getAllTodo()
		setTodo(newTodo)
		setLoading(false)
	}

	useEffect(() => {
		handleGetAllTodo()
	}, [])

	return (
		<div className="App">
			<Header />
			{isLoading ? (
				<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
					<Spin size='large' />
				</div>
			) : (
				<Fragment>
					<AddTodo setLoading={setLoading} setTodo={setTodo} />
					<TodoList todo={todo} setTodo={setTodo} />
				</Fragment>
			)}
		</div>
	)
}

export default App

