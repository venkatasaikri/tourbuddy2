// src/components/Register.js
import React, { useState, useContext } from "react";
import {Link, useNavigate} from 'react-router-dom'

import "../styles/Register.css";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {

  const [credentials, setCredentials] = useState({
    username : undefined ,
    email : undefined ,
    password : undefined
  });

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: 'post',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type:'REGISTER_SUCCESS'});
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };
  
  return (
    <section className="registerSection">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Choose a password"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
