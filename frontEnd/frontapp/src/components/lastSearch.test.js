import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
// import {prettyDOM} from '@testing-library/dom'
import LastSearch from "./lastSearch";

test("renders content", () => {
  const lista = [] 
  const component = render(<LastSearch lastReservers={lista}/>);
  expect(component.container).toHaveTextContent("Results:");

})


test("renders content with list.lenght > 0", () => {
  const lista = [{
    "text": "sam",
    "palindrome": false
    },
    {
      "text": "toolbox",
      "palindrome": false
      }] 
  const component = render(<LastSearch lastReservers={lista}/>);
  expect(component.container).toHaveTextContent("Results:");
  expect(component.container).toHaveTextContent("sam");
  expect(component.container).toHaveTextContent("toolbox");
  expect(component.container).toHaveTextContent("Palindrome: false");
   
})

