import React, { useRef, useState } from "react";
import Styled from "styled-components";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import toast, { Toaster } from "react-hot-toast";

import flags from "react-phone-number-input/flags";
import { AiFillCaretDown } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import axios from "axios";
export default React.memo(function CTAsection() {
  const [name, setName] = useState("");
  const [email, setmail] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [country, setCountry] = useState("IN");
  const [subject, setSelectedOption] = useState("");
  const [description, setMessage] = useState("");
  const [topic, setTopic] = useState("Topic");
  const [priority, setPriority] = useState("");
  const [isVis, setIsvis] = useState(false);
  const [Data, setData] = useState([
    {
      name: "",
      email: "",
      topic: "",
      phoneNumber: "",
      subject: "",
      description: "",
    },
  ]);

  const form = useRef();
  const [isLoading, setLoading] = useState(false);
  const Loader = () => {
    return (
      <Load>
        <div class="loader">
          <span class="load"></span>
        </div>
      </Load>
    );
  };

  function checkData(data) {
    const errors = {};
    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.subject || data.subject.trim() === "") {
      errors.name = "Subject is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = "Invalid email address";
    }
    const phoneRegex = /^\d{10}$/;
    if (!data.phoneNumber || !phoneRegex.test(data.phoneNumber)) {
      errors.phoneNumber =
        "Invalid phone number \n Phone number should be of 10 digits";
    }

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return { errorType: "validation", errorMessage: errors };
    }
  }
  const clearAll = () => {
    setName("");
    setmail("");
    setPhonenumber("");
    setCountry("AU");
    setSelectedOption("");
    setMessage("");
    setTopic("Topic");
    setPriority("");
    setIsvis(false);
  };
  const postGetInTouchDetails = async () => {
    setLoading(true);
    if (topic === "Billing and Payments" || topic === "Website Issues" || topic === "Game Issues" || topic === "Privacy Concerns" || topic === "Data Security") {
      setPriority("High");
    } else if (topic === "Feedback and Suggestions" || topic === "Partnerships and Collaborations" || topic === "Employment Opportunities") {
      setPriority("Medium");
    } else if (topic === "General Inquiries" || topic === "Language Options") {
      setPriority("Low");
    }

    const data = {
      name: name,
      email: email,
      countryCode: "+" + getCountryCallingCode(country),
      phoneNumber: phoneNumber,
      topic: topic,
      subject: subject,
      description: description,
      priority: priority,
    };
    const check = checkData(data);
    console.log(check);
    if (check === true) {
      await axios
        .post("https://plearn-backend.onrender.com/postGetInTouchDetails", data)
        .then((response) => {
          console.log(response.data);
          setTimeout(() => {
            toast.success(`Thanks for reaching out!`, {
              duration: 1500,
            });
          }, 1000);
          setLoading(false);
          clearAll();
        });
    } else {
      const errorMs = check.errorMessage;
      if (errorMs.email) {
        toast(`Opps! ${errorMs.email}`, { duration: 2000 });
      }
      if (errorMs.phoneNumber) {
        toast(`Opps! ${errorMs.phoneNumber}`, { duration: 2000 });
      }
      if (errorMs.name) {
        toast(`Opps! ${errorMs.name}`, { duration: 2000 });
      } 
      setLoading(false);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_bjmhs3a",
    //     "template_2af3gba",
    //     form.current,
    //     "UoV0VvRc7Blz8fzTE"
    //   )
    //   .then(
    //     (result) => {
    //       // handleSubmit();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  const CountrySelect = ({ onChange, labels }) => (
    <ul
      className="boxx flex me-2"
      onClick={() => {
        setIsvis(!isVis);
      }}
    >
      <li className="flex gap-2 start">
        <img
          style={{ height: "20px", width: "30px" }}
          src={` https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
          alt=""
        />
        <span className="px-2"> +{getCountryCallingCode(country)}</span>
      </li>
      <AiFillCaretDown />
      <div
        className="flex-col"
        style={{ display: `${isVis ? "flex" : "none"}` }}
      >
        {getCountries().map((country) => (
          <li
            onClick={() => {
              setCountry(`${country}`);
              setIsvis(false);
            }}
            className="flex gap-2 start hov"
          >
            <img
              className="mx-2"
              style={{ height: "20px", width: "30px" }}
              src={` https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
              alt=""
            />
            <span className="px-2"> +{getCountryCallingCode(country)}</span>
          </li>
        ))}
      </div>
    </ul>
  );

  return (
    <Container>
       <Toaster
          toastOptions={{ 
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      <div id="container">
        <h1>Interest form </h1>
        <form
          className="form"
          autoComplete="off"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex">
            <div className="name">
              <label for="name"></label>
              <input
                type="text"
                autoComplete="off"
                value={name}
                name="from_name"
                placeholder="Name"
                className={`Firstname  
                     `}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name_input"
              />{" "}
            </div>
            <div className="email">
              <input
                name="user_email"
                type="email"
                className={`email   `}
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
                id="email_input"
              />{" "}
            </div>
          </div>

          <div className="telephone ">
            {" "}
            <CountrySelect
              className={`border-b-2 bg-none outline-none  text-xs  `}
              value={country}
              name="countrySelect"
            />
            <input
              placeholder="Enter phone number"
              value={phoneNumber}
              name="user_Phone"
              onChange={(e) => {
                setPhonenumber(e.target.value);
              }}
            />
          </div>

          <div className="subject">
            <select
              placeholder="Topic"
              name="user_Subject"
              id="subject_input"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            >
              <option disabled hidden selected>
                Topic
              </option>
              <option className="bgBlack">General Inquiries</option>
              <option>Billing and Payments</option>
              <option>Feedback and Suggestions</option>
              <option>Partnerships and Collaborations</option>
              <option>Employment Opportunities</option>
              <option>Website Issues</option>
              <option>Game Issues</option>
              <option>Privacy Concerns</option>
              <option>Data Security</option>
              <option>Language Options</option>
            </select>{" "}
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="Subject"
              id="message_input"
              cols="10"
              value={subject}
              onChange={(event) => setSelectedOption(event.target.value)}
              rows="1"
            ></textarea>
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              value={description}
              onChange={(event) => setMessage(event.target.value)}
              rows="5"
            ></textarea>
          </div>
          <div
            type="submit"
            value="Send"
            className={`btnW ${isLoading && "border-white"}`}
          >
            <button disabled={isLoading} onClick={postGetInTouchDetails}>
              {isLoading ? <Loader></Loader> : <span class="box">Submit</span>}
            </button>
          </div>
        </form>
      </div>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </Container>
  );
});
const Container = Styled.div`
.border-white{
  border:2px solid white; 
  width: 130px;
  border-radius: 20px;
  padding: 2px
}
display: flex;
background:black;
background-repeat:no-repeat;
background-size:cover;    background-position: center;
background-image:url('https://cosmos.network/_nuxt/img/184b48b.png');
padding: 10vw;
    align-items: center;
    justify-content: center;
 h1{
  font-size: calc(1.57625rem + 4.37833vw);
  letter-spacing:-2px; 
 }
 #container,form{  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  align-items: flex-start;
 }
 form{
  gap:5vh;
  width: 100%;
 }
 .email{
  width: 100%;
 }
 .name{
  width:70%;
 }
 ul,li{
  list-style:none;
 }
 .hov:hover{ 
  transition:all;
  background: rgba(0,0,0,0.7);
  color:white;
 }
 #container{
  gap:10vh;
 }
 .flex{
  display: flex; 
  justify-content: space-evenly;
  align-items: center;
  gap:2vw;  
 }
 .start{
  align-items: center;
  justify-content: flex-start !important;
  width:100%; 
 }
 .flex-col{
  border:2px solid white;
  border-radius:5px;
  background: #F5F5F5;
  color:black;
  display:flex;
  width:150px;
  flex-direction:column;
  position:absolute; 
  bottom:-10px;
  max-height:40vh;
  overflow:auto;
 } 
 

 .flex-col::-webkit-scrollbar-track{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3) !important;
	background-color: #F5F5F5 !important;

	border-radius: 10px !important;
}

 .flex-col::-webkit-scrollbar
{ 
	width: 6px !important;
	background-color: #F5F5F5 !important;
}

 .flex-col::-webkit-scrollbar-thumb
{
	border-radius: 10px !important;

	background-color: red;
}
 input,textarea,select{
  outline: none;
  width: 100%;
  border: none;
  color:white;
  border-radius: 0.5rem;
  padding:  1rem 4rem  1rem 1.5rem;;
  transition: color .15s ease-out,background .15s ease-out;
  background: hsla(0,0%,100%,0.1);
 }
 .PhoneInputCountry,.boxx{
  outline: none; 
  border: none;
  color:white;
  border-radius: 0.5rem;
  height: 100%;
  margin: 0px; 
  padding:  1rem ;
  transition: color .15s ease-out,background .15s ease-out;
  background: hsla(0,0%,100%,0.1);
 }
 .boxx{
  cursor:pointer;
 }
 .telephone,.subject,.message{
  width: 100%; 
 }
 .telephone{
  display:flex;
  select{
    width:auto;
    padding:0.4rem !important;
  }
 }
 .btnW{
  .box {
    width: 140px;
    height: auto;
    float: left;
    transition: .5s linear;
    position: relative;
    display: block;
    overflow: hidden;
    padding: 15px;
    color:white;
    text-align: center;
    margin: 0 5px;
    background: transparent;
    text-transform: uppercase;
    font-weight: 900;
  }
  
  .box:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }
  
  .box:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }
  
  .box:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 100, 0.5);
  }
  
  .box:hover:before {
    border-color: #fff;
    height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .3s;
  }
  
  .box:hover:after {
    border-color: #fff;
    height: 100%;
    transform: translateX(0);
    transition: .3s transform linear, .3s height linear .5s;
  }
  
  button {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
  }
 }
 option{
  color:black; 
 }
`;
const Load = Styled.div`
  .loader {
    width: 50px;
    height: 30px;
    position: relative;
  }

  .loader-text {
    position: absolute;
    top: 0;
    padding: 0;
    margin: 0;
    color: #c8b6ff;
    animation: text_713 3.5s ease both infinite;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .load {
    background-color: #9a79ff;
    border-radius: 50px;
    display: block;
    height: 16px;
    width: 16px;
    bottom: 0;
    position: absolute;
    transform: translateX(64px);
    animation: loading_713 3.5s ease both infinite;
  }

  .load::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #d1c2ff;
    border-radius: inherit;
    animation: loading2_713 3.5s ease both infinite;
  }

  @keyframes text_713 {
    0% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }

    40% {
      letter-spacing: 2px;
      transform: translateX(26px);
    }

    80% {
      letter-spacing: 1px;
      transform: translateX(32px);
    }

    90% {
      letter-spacing: 2px;
      transform: translateX(0px);
    }

    100% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
  }

  @keyframes loading_713 {
    0% {
      width: 16px;
      transform: translateX(0px);
    }

    40% {
      width: 100%;
      transform: translateX(0px);
    }

    80% {
      width: 16px;
      transform: translateX(64px);
    }

    90% {
      width: 100%;
      transform: translateX(0px);
    }

    100% {
      width: 16px;
      transform: translateX(0px);
    }
  }

  @keyframes loading2_713 {
    0% {
      transform: translateX(0px);
      width: 16px;
    }

    40% {
      transform: translateX(0%);
      width: 80%;
    }

    80% {
      width: 100%;
      transform: translateX(0px);
    }

    90% {
      width: 80%;
      transform: translateX(15px);
    }

    100% {
      transform: translateX(0px);
      width: 16px;
    }
  }
`;
