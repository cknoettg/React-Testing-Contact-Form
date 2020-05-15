import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';
import axios from 'axios';

//game plan:
// test First Name
// test Last Name
// test E-mail
// test Message
// test Submit Button

//unexpected behavior that we fixed -
//  the first name field has max length of 3 chars
test('testing form...', async () =>{
    const { getByLabelText, getByRole } = render(<ContactForm />);
  
    const firstName = getByLabelText(/first name/i);
    fireEvent.change(firstName, { target: { value: 'Corey'} });
  
    const lastName = getByLabelText(/last Name/i);
    fireEvent.change(lastName, { target: { value: 'Knoettgen'} });

    const email = getByLabelText(/email/i);
    fireEvent.change(email, { target: { value: 'no@email.com'} });

    const message = getByLabelText(/message/i);
    fireEvent.change(message, { target: { value: 'Test'} });
    
    const button = getByRole('button', /submit/i);
    fireEvent.click(button);

    //STRECTH: async axios.post text call
    //await waitFor(() => expect('https://reqres.in/api/users').toHaveBeenCalledTimes(1))

  });

  //STRETCH: Test axios POST request
  // test("Testing the axios POST request...", async () => {
    
  //   let url = 'https://reqres.in/api/users';

  //   //we have to use a mock or spy function per error msg
  //   let received = jest.fn(axios.post).mockResolvedValueOnce({
  //  //insert some data here
  //     // data: {
  //     //   first_name: "Donald"
  //     // }
  //   })

  //   //STRECTH: Test axios POST request
  //   expect(received).toHaveBeenCalledWith(url);
  //   //expect(received).toHaveBeenCalledTimes(1);

  // });