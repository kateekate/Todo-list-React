import React, { useState } from 'react'
import classes from './TodoList.module.css'
import { Card, Space, Button, Input } from 'antd'
import { DeleteOutlined, EditOutlined, SaveOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons'


function TodoList({ todo, setTodo }) {

	const [edit, setEdit] = useState(null)
	const [value, setValue] = useState('')

	function deleteTodo(id) {
		const newTodo = [...todo].filter(item => item.id !== id)
		setTodo(newTodo)
	}

	function statusTodo(id) {
		const newTodo = [...todo].filter(item => {
			if (item.id === id) {
				item.status = !item.status
			}
			return item
		})
		setTodo(newTodo)
	}

	function editTodo(id, title) {
		setEdit(id)
		setValue(title)
	}

	function saveTodo(id) {
		const newTodo = [...todo].map(item => {
			if (item.id === id) {
				item.title = value
			}
			return item
		})
		setTodo(newTodo)
		setEdit(null)
	}

	return (
		<Space className={classes.todoList}>
			{
				todo.map(item => (
					<Card className={classes.listItem} key={item.id}>
						{
							edit === item.id ?
								<div >
									<Input className={classes.changedCard} value={value} onChange={(e) => setValue(e.target.value)} />
								</div> :
								<Card className={!item.status ? classes.close : classes.changedCardTitle}>{item.title} </Card>
						}
						{
							edit === item.id ?
								<div className={classes.saveBtn}>
									<Button onClick={() => saveTodo(item.id)}> <SaveOutlined /> </Button>
								</div> :
								<div className={classes.btn}>
									<Button onClick={() => deleteTodo(item.id)}><DeleteOutlined /></Button>
									<Button onClick={() => editTodo(item.id, item.title)}><EditOutlined /></Button>
									<Button onClick={() => statusTodo(item.id)}>
										{
											item.status ? <UnlockOutlined /> : <LockOutlined />
										}
									</Button>
								</div>
						}

					</Card>
				))
			}
		</Space>
	)
}

export default TodoList

