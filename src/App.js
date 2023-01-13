import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/AddTodo/TodoList/TodoList'
import './Styles/App.css'
// import { getAllToDo } from './Api'  

function App() {

	const [todo, setTodo] = useState([])

	useEffect(() => {
		// getAllToDo(setTodo)
	}, [])

	return (
		<div className="App">
			<Header />
			<AddTodo todo={todo} setTodo={setTodo} />
			<TodoList todo={todo} setTodo={setTodo} />
		</div>
	)
}

export default App

