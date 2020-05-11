import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from '../src/components/ContactForm';

//game plan:
// test App render
// test ContactForm render

test("renders App without crashing", () => {
  render(<App />);
});

test("renders ContactForm", () =>{
  render(<ContactForm />)
});
