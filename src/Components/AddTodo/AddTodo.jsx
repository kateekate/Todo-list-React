import React, { useState } from "react";
import classes from './AddTodo.module.css'
import { SaveOutlined } from '@ant-design/icons';
import { Button, Space, Input } from 'antd';

function AddTodo({ todo, setTodo }) {

  const [value, setValue] = useState('')
  function saveTodo() {
    setTodo(
      [...todo, {
        id: Math.random().toString(36).substring(2, 9),
        title: value,
        status: true,
      }]
    )
    setValue('')
  }


  return (
    <Space>
      <div className={classes.newTask}>
        <Input placeholder="Write a task" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button onClick={saveTodo} className={classes.button}> <SaveOutlined /> </Button>
      </div>
    </Space>
  )
}

export default AddTodo