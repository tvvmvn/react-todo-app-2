import { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import FilterButton from "./components/FilterButton.jsx";
import Todo from "./components/Todo.jsx";

const DATA = [
  { id: "task-1", name: "Eat", completed: true },
  { id: "task-2", name: "Sleep", completed: false },
  { id: "task-3", name: "Repeat", completed: false },
]

const FILTER_MAP = {
  All: () => true,
  Done: (task) => task.completed,
  Active: (task) => !task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {
  
  const [tasks, setTasks] = useState(DATA);
  const [filter, setFilter] = useState("All");

  console.log(tasks);

  function addTask(name) {

    const newTask = { 
      id: "task-" + Math.random(), 
      name, 
      completed: false 
    }

    setTasks([...tasks, newTask])
  }

  function updateTask(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id == id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => task.id !== id);

    setTasks(remainingTasks);
  }

  const filterButtons = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name}
      name={name} 
      filter={filter}
      setFilter={setFilter}
    />
  ))

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo 
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      updateTask={updateTask}
      deleteTask={deleteTask}
    />
  ))

  return (
    <>
      <h1>Todo app</h1>
      <Form addTask={addTask} />

      <p>
        {filterButtons}
      </p>

      <h3>{taskList.length} tasks</h3>
      <ul>
        {taskList}
      </ul>
    </>
  )
}
