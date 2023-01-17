import React, { useState } from 'react'
import classes from './TodoList.module.css'
import { Card, Space, Button, Input } from 'antd'
import { DeleteOutlined, EditOutlined, SaveOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons'
import { removeTodo, updateTodo } from '../../../Api'


function TodoList({ todo, setTodo }) {

	const [edit, setEdit] = useState(null)
	const [value, setValue] = useState('')

	async function deleteTodo(id) {
		await removeTodo(id)
		setTodo(prev => prev.filter(item => item._id !== id))
	}

	async function statusTodo(id, title, status) {
		await updateTodo(id, {title, status: !status})
		setTodo(prev => [...prev].filter(item => {
			if (item._id === id) {
				item.status = !item.status
			}
			return item
		}))
	}

	function editTodo(id, title) {
		setEdit(id)
		setValue(title)
	}

	async function saveTodo(id, status) {
		await updateTodo(id, {
			title: value,
			status,
		})
		setTodo(prev => [...prev].map(item => {
			if (item._id === id) {
				item.title = value
			}
			return item
		}))
		setEdit(null)
	}

	const isValid = (value.length > 3) && (value.length < 300)

	return (
		<Space className={classes.todoList}>
			{
				todo.map(item => (
					<Card className={classes.listItem} key={item._id}>
						{
							edit === item._id ?
								<div >
									<Input className={classes.changedCard} value={value} onChange={(e) => setValue(e.target.value)} />
								</div> :
								<Card className={!item.status ? classes.changedCardTitle : classes.close}>{item.title} </Card>
						}
						{
							edit === item._id ?
								<div className={classes.saveBtn}>
									<Button disabled={!isValid} onClick={() => saveTodo(item._id, item.status)}> <SaveOutlined /> </Button>
								</div> :
								<div className={classes.btn}>
									<Button onClick={() => deleteTodo(item._id)}><DeleteOutlined /></Button>
									<Button onClick={() => editTodo(item._id, item.title)}><EditOutlined /></Button>
									<Button onClick={() => statusTodo(item._id, item.title, item.status)}>
										{
											item.status ? <LockOutlined /> : <UnlockOutlined />
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

