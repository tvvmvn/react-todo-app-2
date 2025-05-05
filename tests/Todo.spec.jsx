import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../src/components/Todo';

describe('Todo suites', () => {

  const props = { 
    id: "todo-1", 
    name: "Eat", 
    completed: true,
    deleteTask: vi.fn(),
    updateTask: vi.fn()
  }

  test("Rendering", () => {
    const { debug } = render(<Todo {...props} />);

    expect(screen.getByText(props.name))
  })
  
  test("Removing a task", () => {
    const { debug } = render(<Todo {...props} />);

    fireEvent.click(screen.getByRole("button"))

    expect(props.deleteTask).toBeCalledWith("todo-1")
  })

  test("Toggling a task", () => {
    const { debug } = render(<Todo {...props} />);

    fireEvent.click(screen.getByRole("checkbox"))

    expect(props.updateTask).toBeCalledWith("todo-1")
  })
});
