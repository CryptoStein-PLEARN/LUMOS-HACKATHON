import React, { useState } from "react";
import Styled from "styled-components";
export default React.memo(function CTAsection() {
  const [name, setName] = useState("");
  const [nameError, setnameError] = useState("");
  const [Email, setmail] = useState("");
  const [emailError, setemailError] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [emptyError, setEmptyerror] = useState("");
  const [selectedOption, setSelectedOption] = useState("Subject line");
  const [Message, setMessage] = useState("");
  const [selectedOptionError, setSelectedOptionerror] = useState("");
  const [Data, setData] = useState([
    {
      name: "",
      phonenumber: "",
      email: "",
      Message: "",
    },
  ]);
  const handleSubmit = () => {
    if (name === "" || Email === "" || Message === " ") {
      setEmptyerror("All fields are mondatory");
      setTimeout(() => {
        setEmptyerror("");
      }, 1350);
      return false;
    }
    if (!name.match(/^[A-Za-z ]+$/)) {
      setnameError("Name should contain only Aphabets");
      setTimeout(() => {
        setnameError("");
        setName("");
      }, 1350);
      return false;
    }

    if (!phonenumber.match(/^\d+$/)) {
      setphoneNumberError(
        "Phone number should contain only Numerals without any spaces"
      );
      setTimeout(() => {
        setphoneNumberError("");
        setPhonenumber("");
      }, 1350);
      return false;
    }
    if (phonenumber.charAt(0) === 0) {
      setphoneNumberError("Phone number cannot start with 0");
      setTimeout(() => {
        setphoneNumberError("");
        setPhonenumber("");
      }, 1350);
      return false;
    }
    if (!Email.includes("@")) {
      setemailError("Email must contain @");
      setTimeout(() => {
        setemailError("");
        setmail("");
      }, 1350);
      return false;
    }
    if (phonenumber.length !== 10) {
      setphoneNumberError("Phone number must be of 10 digits");
      setTimeout(() => {
        setphoneNumberError("");
        setPhonenumber("");
      }, 1350);
      return false;
    }
    if (selectedOption === "Subject line") {
      setSelectedOptionerror("Please select an pption ");
      setTimeout(() => {
        setSelectedOptionerror("");
        setSelectedOption("Subject line");
      }, 1350);
      return false;
    }
    setData([
      {
        name: name,
        phonenumber: phonenumber,
        email: Email,
        Message: Message,
      },
    ]);
    return true;
  };
  return (
    <Container>
      <div id="container">
        <h1>&bull; Get in Touch &bull;</h1>
        <div className="underline"></div>
        <div className="icon_wrapper">
          <svg className="icon" viewBox="0 0 145.192 145.192">
            <path d="M126.82,32.694c-2.804,0-5.08,2.273-5.08,5.075v2.721c-1.462,0-2.646,1.185-2.646,2.647v1.995    c0,1.585,1.286,2.873,2.874,2.873h20.577c1.462,0,2.646-1.185,2.646-2.647v-3.041c0-1.009-0.816-1.825-1.823-1.825v-2.722    c0-2.802-2.276-5.075-5.079-5.075h-1.985v-3.829c0-3.816-3.095-6.912-6.913-6.912h-0.589h-20.45c0-2.67-2.164-4.835-4.833-4.835    H56.843c-2.67,0-4.835,2.165-4.835,4.835H34.356v-3.384h-9.563v3.384v1.178h-7.061v1.416c-2.67,0.27-10.17,1.424-13.882,5.972    c-1.773,2.17-2.44,4.791-1.983,7.793c0.463,3.043,1.271,6.346,2.128,9.841c2.354,9.616,5.024,20.515,0.549,28.077    C2.647,79.44-3.125,90.589,2.201,99.547c4.123,6.935,13.701,10.44,28.5,10.44c1.186,0,2.405-0.023,3.658-0.068v9.028h-0.296    c-2.516,0-4.558,2.039-4.558,4.558v4.566h100.04v-4.564c0-2.519-2.039-4.558-4.558-4.558h-0.297V84.631h0.297    c2.519,0,4.558-2.037,4.558-4.556v-0.009c0-2.516-2.039-4.556-4.556-4.556l-36.786-0.009V61.973c0-2.193-1.777-3.971-3.972-3.971    v-4.711h0.456c1.629,0,2.952-1.32,2.952-2.949h14.227V34.459h1.658c2.672,0,4.834-2.165,4.834-4.834h20.45v3.069H126.82z     M34.06,75.511c-2.518,0-4.558,2.04-4.558,4.556v0.009c0,2.519,2.042,4.556,4.558,4.556h0.296v24.12l-0.042-1.168    c-15.994,0.574-26.122-2.523-30.106-9.229C-0.464,90.5,4.822,80.347,6.55,77.423c4.964-8.382,2.173-19.774-0.29-29.825    c-0.843-3.442-1.639-6.696-2.088-9.638c-0.354-2.35,0.129-4.3,1.484-5.958c3.029-3.714,9.509-4.805,12.076-5.1v1.233h7.061v1.49    v2.684c-2.403,1.114-4.153,2.997-4.676,5.237H18.15c-0.584,0-1.056,0.474-1.056,1.056v0.83c0,0.584,0.475,1.056,1.056,1.056h1.984    c0.561,2.18,2.304,3.999,4.658,5.092v0.029c0,0-2.282,20.823,16.479,22.099v1.102c0,1.177,0.955,2.133,2.133,2.133h3.297    c1.178,0,2.133-0.956,2.133-2.133V50.135c0-1.177-0.955-2.132-2.133-2.132h-3.297c-1.178,0-2.133,0.955-2.133,2.132    c-1.575-0.235-5.532-1.17-6.635-4.547c2.36-1.092,4.109-2.913,4.669-5.097h1.308c0.722,0,1.309-0.584,1.309-1.308v-0.578    c0-0.584-0.475-1.056-1.056-1.056h-1.539c-0.542-2.332-2.416-4.271-4.968-5.363v-2.559h17.651c0,2.67,2.166,4.835,4.836,4.835 h2.392v15.88h13.639c0,1.629,1.321,2.949,2.951,2.949h0.899v4.711c-2.194,0-3.972,1.778-3.972,3.971v13.529L34.06,75.511z     M95.188,101.78c0,8.655-7.012,15.665-15.664,15.665c-8.653,0-15.667-7.01-15.667-15.665c0-8.647,7.014-15.664,15.667-15.664    C88.177,86.116,95.188,93.132,95.188,101.78z M97.189,45.669h-9.556c0-0.896-0.726-1.62-1.619-1.62H74.494    c-0.896,0-1.621,0.727-1.621,1.62h-8.967v-11.21h33.283V45.669z"></path>
            <path d="M70.865,101.78c0,4.774,3.886,8.657,8.66,8.657c4.774,0,8.657-3.883,8.657-8.657c0-4.773-3.883-8.656-8.657-8.656    C74.751,93.124,70.865,97.006,70.865,101.78z"></path>
          </svg>
        </div>
        <form autoComplete="off" action="#" method="post" id="contact_form">
          <div className="name">
            <label for="name"></label>
            <input
              type="text"
              autoComplete="off"
              value={name}
              placeholder="Name"
              className={`Firstname ${
                nameError.length > 0 || emptyError.length > 0 ? "invalid" : "."
              } `}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name_input"
            />{" "}
            {nameError && <div className="error">{nameError}</div>}
          </div>
          <div className="email">
            <label for="email"></label>
            <input
              type="email"
              className={`email ${
                emailError.length > 0 || emptyError.length > 0 ? "invalid" : "."
              } `}
              placeholder="Email"
              value={Email}
              onChange={(e) => {
                setmail(e.target.value);
              }}
              name="email"
              id="email_input"
            />{" "}
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="telephone">
            <label for="name"></label>
            <input
              type="text"
              autoComplete="off"
              className={`phone${
                phoneNumberError.length > 0 || emptyError.length > 0
                  ? "invalid"
                  : "."
              } `}
              placeholder="Phone Number"
              value={phonenumber}
              onChange={(e) => {
                setPhonenumber(e.target.value);
              }}
              name="telephone"
              id="telephone_input"
            />
            {phoneNumberError && (
              <div className="error">{phoneNumberError}</div>
            )}
          </div>
          <div className="subject">
            <label for="subject"></label>
            <select
              placeholder="Subject line"
              name="subject"
              id="subject_input"
              className={`${selectedOptionError.length > 0 ? "invalid" : "."} `}
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              <option disabled hidden selected>
                Subject line
              </option>
              <option>I'd like to GIVE A FEEDBACK</option>
              <option>I'd like to ask a question</option>
              <option>I'd like to make a proposal</option>
            </select>{" "}
            {selectedOptionError && (
              <div className="error">{selectedOptionError}</div>
            )}
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              value={Message}
              onChange={(event) => setMessage(event.target.value)}
              rows="5"
            ></textarea>
          </div>
          <div className="submit">
            <div className="button" onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </form>
      </div>{" "}
    </Container>
  );
});
const Container = Styled.div`
.submit {
  
  .button {
    cursor: pointer;
    margin: 20px;
    width: 100px;
    padding: 15px 20px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    z-index: 1;
  }

  .button::after,
  .button::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  .button::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  .button::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  .button:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  .button:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  .button:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
}
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color: transparent!important;
  color: Wheat !important;
}
.invalid {
  animation: justshake 0.3s forwards;
  color:  #03e9f4 !important;
  border-bottom: 2px solid  #03e9f4 !important;
}
.error {
  color: red; 
  margin-bottom: 20px;
}
@keyframes justshake {
  25% {
    transform: translateX(5px);
  }

  50% {
    transform: translateX(-5px);
  }

  75% {
    transform: translateX(5px);
  }

  100% {
    transform: translateX-(5px);
  }
}
button {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, select, textarea {
  color: wheat;
  font: inherit;
  margin: 0;
}

input {
  color:wheat;
  line-height: normal;
}
input:placeholder{
  color:black;
}
textarea {
  overflow: auto;
}

#container {
  border: solid 3px wheat;
  max-width: 768px;
  margin: 60px auto;
  position: relative;
}

form {
  padding: 37.5px;
  margin: 50px 0;
}

h1 {
  color: wheat;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 7px;
  text-align: center;
  text-transform: uppercase;
}

.underline {
  border-bottom: solid 2px wheat;
  margin: -0.512em auto;
  width: 120px;
}

.icon_wrapper {
  margin: 50px auto 0;
  width: 100%;
}

.icon {
  display: block;
  fill:wheat;
  height: 50px;
  margin: 0 auto;
  width: 50px;
}

.email {
	float: right;
	width: 45%;
}

input[type='text'], [type='email'], select, textarea {
	background: none;
  border: none;
	border-bottom: solid 2px wheat;
	color: wheat;
	font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
	margin: 0em 0 1.875em 0;
	padding: 0 0 0.875em 0;
  text-transform: uppercase;
	width: 100%;
 	box-sizing: border-box;
 	transition: all 0.3s;
}

input[type='text']:focus, [type='email']:focus, textarea:focus {
	outline: none;
	padding: 0 0 0.875em 0;
}

.message {
	float: none;
}
option{
color:black
}
.name {
	float: left;
	width: 45%;
}

select {
  background: url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png') no-repeat right;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

select::-ms-expand {
  display: none;
}

.subject {
 
  width: 100%;
}

.telephone {
  width: 100%;
}

textarea {
	line-height: 150%;
	height: 150px;
	resize: none;
  width: 100%;
}

::-webkit-input-placeholder {
	color: wheat;
}
 
 
#form_button {
  background: none;
  border: solid 2px #474544;
  color: #474544;
  cursor: pointer;
  display: inline-block;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  outline: none;
  padding: 20px 35px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}

#form_button:hover {
  background: #474544;
  color: #F2F3EB;
}

@media screen and (max-width: 768px) {
  #container {
    margin: 20px auto;
    width: 95%;
  }
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 26px;
  }
  
  .underline {
    width: 68px;
  }
  
  #form_button {
    padding: 15px 25px;
  }
}

@media screen and (max-width: 420px) {
  h1 {
    font-size: 18px;
  }
  
  .icon {
    height: 35px;
    width: 35px;
  }
  
  .underline {
    width: 53px;
  }
  
  input[type='text'], [type='email'], select, textarea {
    font-size: 0.875em;
  }
}
.signupSection {
  background: url(https://source.unsplash.com/TV2gg2kZD1o/1600x800);
  background-repeat: no-repeat; 
  width: 800px;
  height: 450px;
  text-align: center;
  display: flex;
  color: white;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
}

.info {
  width: 45%;
  background: rgba(20, 20, 20, .8);
  padding: 30px 0;
  border-right: 5px solid rgba(30, 30, 30, .8);
  h2 {
    padding-top: 30px;
    font-weight: 300;
  }
  p {
    font-size: 18px;
  }
  .icon {
    font-size: 8em;
    padding: 20px 0;
    color: rgba(10, 180, 180, 1);
  }
}

.signupForm {
  width: 70%;
  padding: 30px 0;
  background: rgba(20, 40, 40, .8);
  transition: .2s;
  h2 {
    padding:10px 30px;
    font-weight: 300;
    font-size:26px;
  }
}

.inputFields {
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid rgba(10, 180, 180, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, .2);
  color: white;
  outline: none;
}

.noBullet {
  list-style-type: none;
  padding: 0;
}

#join-btn {
  border: 1px solid wheat;
  background: rgba(20, 20, 20, .6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 30px;
  cursor: pointer;
  transition: .4s;
  &:hover {
    background: rgba(20, 20, 20, .8);
    color:wheat;
    padding: 15px 50px;
  }
}


.section-item {
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-top:65px;
    margin-top: 0px;
    .container {
        width: 1200px;
        .section__content{
            .promo-banner-fw{ 
    background-position: right; 
                    height: 345px;
                    padding-left: 62px;
                    border-radius: 16px;
                    background-color:rgb(217,238,255);
                    background-size: 35%;
                    color: var(--color-grey);
                    background-repeat: no-repeat; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center; 
           
                .block-title-inline {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    color: #1F2128;
                    .image {
                        width: 20px;
                        height: 16px;
                        margin-right: 13px;max-width: 100%;
                        vertical-align: middle;
                        display: inline-block;  
                          border: 0;
                    }.heading-3 {
                        color: #1F2128;
                        letter-spacing: 5.5px;font-size: 18px;
                        line-height: 24px;
                        margin-top: 10px;
                    }
                }
                .promo-banner-fw__heading {
                    max-width: 670px;
                    margin-top: 0px;
                    margin-bottom: 24px;
                    font-size: 36px;
                    line-height: 47px;   
                    color: #1F2128;
                    font-weight: 600;
                }
                .tnp-subscription-nft {  
                      transform: translateY(0px);
                    opacity: 1;
                    max-width: 400px;
                    .sub-nft {
                        display: flex;margin-top: 0em;
                        input {
                            line-height: normal;    color: inherit;
                            font: inherit;
                            margin: 0;
                        }input[type="hidden" i] {
                            appearance: none;
                            background-color: initial;
                            cursor: default;
                            display: none !important;
                            padding: initial;
                            border: initial;
                        }
                        .tnp-field-email {
                            height: 46px;
                            width: 100%;
                            border-radius: 8px 0 0 8px;
                            background-color: rgba(31, 33, 40, 0.11);
                            input[type=email] {
                                width: 100%;
                                height: 100%;
                                border: 1px none #000;
                                border-radius: 0px;
                                background-color: transparent;
                                color: var(--color-grey);
                                font-size: 14px;
                                font-weight: 700;
                                outline: none;
                                padding: 8px 12px;
                                display: block;
                                line-height: 1.428571429;
                                margin-bottom: 10px; 
                                margin: 0;
                            }
                        }
                       .tnp-field-button {
                            background-color: var(--color-grey);
                            color: #f0f2f6;
                            border: 0;
                            padding: 6px 18px;
                            border-radius: 8px;
                            cursor: pointer;
                            display: flex;
                            flex: 0 0 auto;
                            position: relative;
                            left: -10px;
                            input[type="submit"] {
                                position: inherit;
                                border: 0;
                                text-transform: uppercase;
                                font-size: 14px;
                                font-weight: 700;color: inherit; 
                                margin: 0;
                        
                                text-decoration: none;
                                vertical-align: middle;    cursor: pointer;
                                background: transparent;    transition: all 200ms ease-in-out;
                            }
                        }
                    }.w-form {
                        margin: 0 0 15px;
                        display: block;
                        max-width: 400px;
                        width: 100%;
                        height: auto;
                        -webkit-box-pack: start;
                        -webkit-justify-content: flex-start;
                        -ms-flex-pack: start;
                        justify-content: flex-start;
                        -webkit-box-align: start;
                        -webkit-align-items: flex-start;
                        -ms-flex-align: start;
                        align-items: flex-start;
                        border-radius: 8px;
                        background-color: transparent;
                        .checkbox-field {
                            margin-top: 10px;    display: block;
                            margin-bottom: 5px;
                            padding-left: 20px;    font-weight: bold;
                        }
                    }
                    .w-checkbox::before {
                        content: " ";
                        display: table;
                        -ms-grid-column-span: 1;
                        grid-column-end: 2;
                        -ms-grid-column: 1;
                        grid-column-start: 1;
                        -ms-grid-row-span: 1;
                        grid-row-end: 2;
                        -ms-grid-row: 1;
                        grid-row-start: 1;
                    }.checkbox {
                        width: 13px;
                        float: left;
                        margin-bottom: 0px;
                        margin-left: -20px;
                        margin-right: 0px;
                        margin-top: 4px;
                        line-height: normal;
                        height: 13px;
                        border-style: none;
                        border-radius: 4px;
                        background-color:  #808191;;
                        color:  #808191;;border-top-width: 1px;
                        border-bottom-width: 1px;
                        border-left-width: 1px;
                        border-right-width: 1px;
                        border-top-color: #ccc;
                        border-bottom-color: #ccc;
                        border-left-color: #ccc;
                        border-right-color: #ccc;
                    }
                     
                    .w-chck {
                        line-height: normal;    box-sizing: border-box;
                        padding: 0;    opacity: 0;
                        position: absolute;
                        z-index: -1;
                    }
                   
                    .checkbox-label {
                        font-size: 14px;display: inline-block;
                        cursor: pointer;
                        font-weight: normal;
                        margin-bottom: 0px;
                        a{
                            color: var(--color-grey);
    text-decoration: underline;
} 
                    }
                }
                .w-checkbox::after {
                    content: " ";
                    display: table;
                    -ms-grid-column-span: 1;
                    grid-column-end: 2;
                    -ms-grid-column: 1;
                    grid-column-start: 1;
                    -ms-grid-row-span: 1;
                    grid-row-end: 2;
                    -ms-grid-row: 1;
                    grid-row-start: 1;
                    clear: both;
                }
            }
        }
  }

}

@media only screen and (max-width: 991px) {
    .promo-banner-fw {
      height: auto !important;
      width: 100%!important;;
      background-image: unset!important;;
      padding: 40px!important;;
      background-size: cover!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw {
      padding: 40px 20px!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw .block-title-inline {
      justify-content: center!important;;
      align-content: center!important;;
      margin: 0!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw .block-title-inline h4 {
      letter-spacing: 2.5px!important;;
    }
  }
  @media only screen and (max-width: 480px) {
    .promo-banner-fw .form__newsletter-button--grey,
  .promo-banner-fw .btn.btn--black.btn--xl {
      width: 100%!important;;
      max-width: unset!important;;
      height: 46px!important;;
      padding: 0!important;;
      display: flex!important;;
      align-items: center!important;;
      justify-content: center!important;;
    }
  }
  .form{
    display: block;
    max-width: 400px;
    width: 100%;
    height: auto;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-radius: 8px;
    background-color: transparent;
  }
  .material-symbols-outlined{
    color:white;
    width: 0px;
    float: left;
    margin-bottom: 0px;
    margin-left: -1px;
    margin-right: 0px;
    margin-top: -3px;
    line-height: normal;
    height: 8px;
    border-style: none;    font-size: 15px;

    border-radius: 4px;
  }
`;
