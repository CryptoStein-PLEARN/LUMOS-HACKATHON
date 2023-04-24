import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios';

import M from "../assets/copia-100.png";
export default function Card() {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubscribe = async () => {
    if (!email) {
      setErrorMsg('Please enter your email');
      return;
    }
    
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post("https://plearn-backend.onrender.com/preregistration", { email });
      setSuccessMsg(response.data.message);
      setErrorMsg("");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMsg("User already registered");
      } else {
        setErrorMsg("An error occurred while pre-registering");
      }
      setSuccessMsg("");
    }
  }
  return (
    <div class="card">
      <div class="cta logo-thumbnail">
        <img src={M} className="" alt="" />
        <h1> Learn the basics of finance for investing! all this BY PLAYING</h1>
        <p class="description"></p>
        <p class="price">
          Join the waiting ist to be among the first 100 to try out PLEARN for
          the first time
        </p>
        <div className="flex w-full dark:bg-gray-800">
          <input
            type="text"
            placeholder="Email"
            className="flex flex-1  text-center border sm:text-sm rounded-l-md    dark:text-gray-100 dark:bg-gray-800"
            value={email}
            onChange={handleEmailChange}
          />

          <button onClick={handleSubscribe}>subscribe</button>
        </div>
        {errorMsg && <p className="error">{errorMsg}</p>}
        {successMsg && <p className="success">{successMsg}</p>}
      </div>
      <div class="img"></div>
    </div>
  );
}
