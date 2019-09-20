import React, { useState } from "react";
import axios from 'axios';

const intitialvalue = {
  username: '',
  password: ''
}

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route
const Login = (props) => {
  const [creds, setCreds] = useState(intitialvalue);

  const handleChange = event => {
    setCreds({...creds, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles')
    })
    .catch(err => console.log(err.response));
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login Here</p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
        value={creds.username}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={creds.password}
      />
      <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
