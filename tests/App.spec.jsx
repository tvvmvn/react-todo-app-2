import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('Todo Scenario', () => {

  test("Adding a task", () => {
    render(<App />)
    
    const form = screen.getByRole("form")
    const input = screen.getByRole("textbox")

    fireEvent.change(input, {
      target: {
        value: "Eat"
      }
    });

    fireEvent.submit(form)

    expect(screen.getAllByRole("todo").length).toBe(4)
  })

  test("Filtering list", () => {
    render(<App />)

    expect(screen.getAllByRole("todo").length).toBe(3)

    fireEvent.click(screen.getByText("Done"))
    expect(screen.getAllByRole("todo").length).toBe(1)

    fireEvent.click(screen.getByText("Active"))
    expect(screen.getAllByRole("todo").length).toBe(2)
  })

  test("Removing a task", () => {
    render(<App />)

    fireEvent.click(screen.getAllByText("delete")[0])
    expect(screen.getAllByRole("todo").length).toBe(2)
  })

  test("Toggling a task", () => {
    render(<App />)

    const cboxes = screen.getAllByRole("checkbox")

    expect(cboxes[0]).toBeChecked()

    fireEvent.click(cboxes[0])
    expect(cboxes[0]).not.toBeChecked()
  })
});
