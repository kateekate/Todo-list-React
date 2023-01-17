import React, { useState } from 'react'
import classes from './AddTodo.module.css'
import { SaveOutlined } from '@ant-design/icons'
import { Button, Space, Input } from 'antd'
import { createTodo } from '../../Api'

function AddTodo({ setTodo, setLoading }) {

	const [value, setValue] = useState('')
	async function saveTodo() {
		setLoading(true)
		const newTodo = await createTodo(value)
		setTodo(prev => [...prev, newTodo])
		setValue('')
		setLoading(false)
	}

	const isValid = (value.length > 3) && (value.length < 300)

	return (
		<Space>
			<div className={classes.newTask}>
				<Input placeholder="Enter a task..." value={value} onChange={(e) => setValue(e.target.value)} />
				<Button disabled={!isValid} onClick={saveTodo} className={classes.button}> <SaveOutlined /> </Button>
			</div>
		</Space>
	)
}

export default AddTodo