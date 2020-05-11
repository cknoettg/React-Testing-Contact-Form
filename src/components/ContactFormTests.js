import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('rendering form test...', () =>{
    render(<ContactForm />)
});

test('testing form...', () =>{
    const { getByLabelText } = render(<ContactForm />)

    const firstName = getByLabelText(/first name/i);
});