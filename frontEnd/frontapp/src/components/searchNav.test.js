import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
// import {prettyDOM} from '@testing-library/dom'
import SearchNav from "./searchNav";



test("Click Send Button", async() => {

  const mocHandler = jest.fn()
  const component = render(<SearchNav process={mocHandler} />)
  const input = component.getByPlaceholderText('Insert Text')
  const button = component.getByText('Send')
  fireEvent.change(input,{ target: { value: "test" } })
  fireEvent.click(button)
  
  // // console.log(prettyDOM(component.container));
  
  // // expect(component.container).getByText('error')


  // //expect(alert).toHaveTextContent(/internal server error/i)

  // expect(mocHandler).toHaveBeenCalledTimes(1)
  
})


test("set value input", async() => {

  const mocHandler = jest.fn()
  const component = render(<SearchNav process={mocHandler} />)
  const input = component.getByPlaceholderText('Insert Text')
  fireEvent.change(input,{ target: { value: "test" } })
  expect(input.value).toBe('test')
  
})