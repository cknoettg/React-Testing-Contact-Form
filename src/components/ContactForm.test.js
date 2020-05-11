import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

//game plan:
// test First Name
// test Last Name
// test E-mail
// test Message
// test Submit Button

//unexpected behavior that we fixed -
//  the first name field has max length of 3 chars
test('testing form...', () =>{
    const { getByLabelText, getByRole } = render(<ContactForm />);
  
    // const firstName = getByLabelText(/first name/i);
    // fireEvent.change(firstName, { target: { value: 'Cor'} });
  
    // const lastName = getByLabelText(/last Name/i);
    // fireEvent.change(lastName, { target: { value: 'Knoettgen'} });

    const email = getByLabelText(/email/i);
    fireEvent.change(email, { target: { value: 'no@mail.com'} });

    const message = getByLabelText(/message/i);
    fireEvent.change(message, { target: { value: 'Test'} });
    
    const button = getByRole('button', /submit/i);
    fireEvent.click(button);
    
  });