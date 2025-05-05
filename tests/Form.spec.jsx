import { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Form from '../src/components/Form'

describe('Form', () => {

  const addTask = vi.fn()

  test("Rendering a form", () => {
    const {debug} = render(<Form addTask={addTask} />)

    screen.getByRole("form")
  })

  test("Typing on input", () => {
    const {debug} = render(<Form addTask={addTask} />)

    const input = screen.getByRole("textbox")
    const button = screen.getByRole("button")

    expect(button).toHaveAttribute("disabled")

    fireEvent.change(input, {
      target: {
        value: "Eat"
      }
    });

    expect(button).not.toHaveAttribute("disabled")
    expect(input).toHaveValue("Eat")
  })

  test("Submitting form", () => {
    const {debug} = render(<Form addTask={addTask} />)
    
    const form = screen.getByRole("form")
    const input = screen.getByRole("textbox")

    fireEvent.change(input, {
      target: {
        value: "Eat"
      }
    });

    fireEvent.submit(form)

    expect(addTask).toBeCalledWith("Eat")
    expect(input).toHaveValue("")
  })
})