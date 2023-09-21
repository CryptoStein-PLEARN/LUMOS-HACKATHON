import React, { useRef, useState } from "react";
import Styled from "styled-components";
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import flags from "react-phone-number-input/flags";
import en from "react-phone-number-input/locale/en.json";
import emailjs from "@emailjs/browser";
import axios from "axios";
export default React.memo(function CTAsection() {
  const [name, setName] = useState("");
  const [nameError, setnameError] = useState("");
  const [email, setmail] = useState("");
  const [emailError, setemailError] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [country, setCountry] = useState();
  const [emptyError, setEmptyerror] = useState("");
  const [subject, setSelectedOption] = useState("Topic");
  const [description, setMessage] = useState("");
  const [selectedOptionError, setSelectedOptionerror] = useState("");
  const [topic, setTopic] = useState("Feedback");
  const [priority, setPriority] = useState("");
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

  const postGetInTouchDetails = async () => {
    if(topic === "Question")
    {
      setPriority("High");
    }
    else if(topic === "Proposal")
    {
      setPriority("Medium")
    }
    else if(topic === "Feedback")
    {
      setPriority("Low")
    }

    const data = {
      name: name,
      email: email,
      countryCode: "+" + getCountryCallingCode(country),
      phoneNumber: phoneNumber,
      topic: topic,
      subject: subject,
      description: description,
      priority: priority
    };
    console.log(data);

    // await axios
    //   .post("https://plearn-backend.onrender.com/postGetInTouchDetails", data)
    //   .then((response) => {
    //     console.log(response.data);
    //   });
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
  const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
      {...rest}
      value={value}
      onChange={(event) => {
        onChange(event.target.value || undefined);
      }}
    >
      <option value="">country</option>
      {getCountries().map((country) => (
        <option
          style={{
            background: `url(${`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}) `,
          }}
          key={country}
          value={country}
        >
          {/* <img
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
            alt=""
          /> */}
          +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  );

  return (
    <Container>
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
                className={`Firstname ${
                  nameError.length > 0 || emptyError.length > 0
                    ? "invalid"
                    : "."
                } `}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name_input"
              />{" "}
              {nameError && <div className="error">{nameError}</div>}
            </div>
            <div className="email">
              <input
                name="user_email"
                type="email"
                className={`email ${
                  emailError.length > 0 || emptyError.length > 0
                    ? "invalid"
                    : "."
                } `}
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setmail(e.target.value);
                }}
                id="email_input"
              />{" "}
              {emailError && <div className="error">{emailError}</div>}
            </div>
          </div>

          <div className="telephone ">
            {" "}
            <CountrySelect
              className={`border-b-2 bg-none outline-none  text-xs  `}
              labels={en}
              value={country}
              onChange={setCountry}
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
            {phoneNumberError && (
              <div className="error">{phoneNumberError}</div>
            )}
          </div>

          <div className="subject">
            <select
              placeholder="Topic"
              name="user_Subject"
              id="subject_input"
              className={`${selectedOptionError.length > 0 ? "invalid" : "."} `}
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            >
              <option disabled hidden selected>
                Topic
              </option>
              <option className="bgBlack"> Feedback</option>
              <option>Question</option>
              <option>Proposal</option>
            </select>{" "}
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="Subject"
              className={`${selectedOptionError.length > 0 ? "invalid" : "."} `}
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
          <div type="submit" value="Send" className="btnW">
            <button onClick={postGetInTouchDetails}>
              <span class="box">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
});
const Container = Styled.div`
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
 .PhoneInputCountry{
  outline: none; 
  border: none;
  color:white;
  border-radius: 0.5rem;
  padding:  1rem ;
  transition: color .15s ease-out,background .15s ease-out;
  background: hsla(0,0%,100%,0.1);
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
