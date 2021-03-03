import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

/**
 * a simple version.
 */
const initialTodos = [
  {
    id: uuid(),
    task: 'call CRA',
    complete: true,
  },
  {
    id: uuid(),
    task: 'working on Gatsby E-Commerce',
    complete: true,
  },
  {
    id: uuid(),
    task: 'extract basic project',
    complete: false,
  },
]

export default () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState(initialTodos)

  const handleChange = evt => {
    setTask(evt.target.value)
  }

  const handleSubmit = evt => {
    if (task) {
      const newTask = {
        id: uuid(), // task.replace(/\W+/g, '') -- remove no-ascii
        task,
        complete: false,
      }
      setTodos(todos.concat(newTask))
    }
    setTask('')
    evt.preventDefault()
  }

  const handleCheck = evt => {
    const idx = todos.findIndex(todo => todo.id === evt.target.id)
    setTodos([...todos.slice(0, idx), { ...todos[idx], complete: evt.target.checked }, ...todos.slice(idx + 1)])
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label htmlFor={todo.id}>
              <input id={todo.id} type="checkbox" checked={todo.complete} onChange={handleCheck} />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
