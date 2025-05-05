import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../src/components/Todo';

describe('Todo suites', () => {

  // props
  const tasks = [
    { id: "todo-1", name: "Eat", completed: true },
    { id: "todo-2", name: "Sleep", completed: false },
    { id: "todo-3", name: "Repeat", completed: false },
  ]
  const deleteTask = vi.fn()
  const updateTask = vi.fn()

  const taskList = tasks.map(task => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      deleteTask={deleteTask}
      updateTask={updateTask}
    />
  ))
  
  test("Rendering list", () => {
    const {debug} = render(taskList)

    tasks.forEach(task => {
      expect(screen.getByText(task.name))
    })
  })

  test("Removing a task", () => {
    const {debug} = render(taskList)

    fireEvent.click(screen.getAllByRole("button")[0])
    expect(deleteTask).toBeCalledWith("todo-1")
  })

  test("Toggling a task", () => {
    const {debug} = render(taskList)

    const cboxes = screen.getAllByRole("checkbox")

    fireEvent.click(cboxes[0])

    expect(updateTask).toBeCalledWith("todo-1")
  })
});
