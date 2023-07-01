import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Thankyou() {
  return (
    <Container>
      <div class="thankyoucontent">
        <div class="wrapper-1">
          <img
            src="https://i.ibb.co/Lkn7rkG/thank-you-envelope.png"
            alt="thank-you-envelope"
            border="0"
          />
          <h1>Thank you</h1>
          <p>
            for reaching out to us! We greatly appreciate your message. Rest
            assured that we will respond promptly upon receiving it{" "}
          </p>
          <button class="go-home">
            <Link to="/">home page</Link>
          </button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: center;

  .wrapper-1 {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .wrapper-2 {
    padding: 30px;
    text-align: center;
  }
  h1 {
    font-size: 4.5em;
    font-weight: 900;
    letter-spacing: 3px;
    color: #fafafa;
    margin: 0;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .wrapper-2 p {
    margin: 0;
    font-size: 1.3em;
    color: #fafafa;
    font-family: "Raleway", sans-serif;
    letter-spacing: 1px;
    line-height: 1.5;
  }
  .go-home {
    background: #e83890;
    border: none;
    padding: 10px 30px;
    margin: 30px 0;
    border-radius: 5px;
    cursor: pointer;
  }
  .go-home:hover {
    opacity: 0.9;
  }
  .go-home a {
    font-family: "Raleway", Arial Black;
    font-size: 1rem;
    font-weight: 700 !important;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .footer-like {
    margin-top: auto;
    background: rgb(31, 38, 130);
    padding: 6px;
    text-align: center;
  }
  .footer-like p {
    margin: 0;
    padding: 4px;
    color: #fafafa;
    font-family: "Raleway", sans-serif;
    letter-spacing: 1px;
  }
  .footer-like p a {
    text-decoration: none;
    color: #5892ff;
    font-weight: 600;
  }

  .footer-like p a:hover {
    color: #fff;
  }

  @media (min-width: 360px) {
    h1 {
      font-size: 4.5em;
    }
    .go-home {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 600px) {
    .thankyoucontent {
      max-width: 1000px;
      margin: 0 auto;
    }
    .wrapper-1 {
      height: initial;
      border-radius: 30px;
      max-width: 620px;
      margin: 0 auto;
      display: flex;
      background: dimgrey;
      padding: 20px;
      margin-top: 50px;
      display: flex;
      background: dimgrey;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 10vh;
      }
      p {
        padding-left: 30px;
        padding-right: 30px;
      }
    }
  }
`;
