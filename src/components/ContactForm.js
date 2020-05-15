import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
    //STRETCH: POST data
    makePost(data);
  };

  //STRETCH: POST Request from REQ|RES API and async
  //https://reqres.in/api/users
  async function makePost(params){

    //initial test
    // let params = {
    //   first_name: 'Corey',
    //   last_name: 'K',
    //   email: 'no@email.com',
    //   message: 'Testing 123'
    // }

    await axios.post('https://reqres.in/api/users', params)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch(error => {
      console.error("Couldn't POST", error)
    });
  }

  //makePost();

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>
            {/* placeholder is in wrong section - fixed by moving from label section to input section */}
        <div>
          <label htmlFor="email">
            Email*
          </label>
          <input id="email" name="email" placeholder="bluebill1049@hotmail.com" ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
