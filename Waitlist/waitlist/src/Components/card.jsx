import React, { useState } from "react";
import axios from "axios";

import M from "../assets/copia-100.png";
export default function Card() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubscribe = async () => {
    setLoader(true);
    if (!email) {
      setErrorMsg("Please enter your email");
      setLoader(false);
      return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setErrorMsg("Please enter a valid email address");
      setLoader(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://plearn-backend.onrender.com/preregistration",
        { email }
      );
      setLoader(false);
      setSuccessMsg(response.data.message);
      setErrorMsg("");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMsg("User already registered");
      } else {
        setErrorMsg("An error occurred while pre-registering");
      }
      setSuccessMsg("");
      setLoader(false);
    }
  };
  return (
    <div class="card">
      <div class="cta logo-thumbnail">
        <img src={M} className="" alt="" />
        <h1> Learn the basics of finance for investing! all this BY PLAYING</h1>
        <p class="description"></p>
        <p class="price">
          Join the waitlist to be among the first 100 to try out PLEARN for
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

          <button onClick={handleSubscribe}>
            {loader ? "......" : "SUBSCRIBE"}
          </button>
        </div>
        {errorMsg && <p className="error">{errorMsg}</p>}
        {successMsg && <p className="success">{successMsg}</p>}
      </div>
      <div class="img"></div>
    </div>
  );
}
