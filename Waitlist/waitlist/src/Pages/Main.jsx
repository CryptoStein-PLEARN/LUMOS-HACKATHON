import React from "react";
import styled from "styled-components";
import Card from "../Components/card";

export default function Main() {
  return (
    <Container>
      <Card />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  input {
    border-width: 0px;
    background: none;
  }
  .link {
    position: absolute;
    bottom: 5%;
    color: grey;
    .p {
      color: grey;
      text-decoration: underline;
    }
    .p:hover {
      color: black;
      cursor: pointer;
    }
  }
  .w-full {
    border-radius: 14px;
    margin-top: 30px;
  }
  .card {
    border-radius: 16px;
    background-color: #fff;
    height: 100%;
    width: 100%;
    max-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
  }

  .cta {
    padding: 32px;
    text-align: center;
    display: flex;

    padding-top: 0px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;

    h1 {
      margin: 0 0 16px 0;
      text-transform: uppercase;
      font-weight: 500;
    }
    h3 {
      text-transform: uppercase;
      margin: 0;
    }

    .description {
      font-size: 1.25em;
      margin: 0;
    }

    .price {
      display: flex;
      align-items: center;
      max-width: 55%;
      font-weight: 200;
      font-size: 18px;
    }
    @media only screen and (max-width: 680px) {
      .price {
        max-width: 100% !important;
      }
      h1 {
        font-size: 24px !important;
      }
      h3 {
        font-size: 14px !important;

        margin-bottom: 10px;
      }
    }
    .amount {
      font-size: 2em;
      margin-left: 8px;
    }
    button {
      text-transform: uppercase;
      transition: 0.5s border ease-in-out;
    }
    button,
    button::after {
      padding: 10px 50px;
      font-size: 20px;
      border: 6px solid white;
      border-radius: 5px;
      color: white;

      position: relative;
    }

    button::after {
      --move1: inset(50% 50% 50% 50%);
      --move2: inset(31% 0 40% 0);
      --move3: inset(39% 0 15% 0);
      --move4: inset(45% 0 40% 0);
      --move5: inset(45% 0 6% 0);
      --move6: inset(14% 0 61% 0);
      clip-path: var(--move1);
      text-transform: uppercase;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
    }

    button:hover::after {
      animation: glitch_4011 1s;
      text-shadow: 10 10px 10px black;
      animation-timing-function: steps(2, end);
      text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #e94be8;
      background-color: rgba(31 41 55);
      border: 3px solid rgb(0, 255, 213);
    }

    button:hover {
      text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #e94be8;
    }

    button:hover {
      background-color: rgba(31 41 55);
      border: 1px solid rgb(0, 255, 213);
      box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
    }

    @keyframes glitch_4011 {
      0% {
        clip-path: var(--move1);
        transform: translate(0px, -10px);
      }

      10% {
        clip-path: var(--move2);
        transform: translate(-10px, 10px);
      }

      20% {
        clip-path: var(--move3);
        transform: translate(10px, 0px);
      }

      30% {
        clip-path: var(--move4);
        transform: translate(-10px, 10px);
      }

      40% {
        clip-path: var(--move5);
        transform: translate(10px, -10px);
      }

      50% {
        clip-path: var(--move6);
        transform: translate(-10px, 10px);
      }

      60% {
        clip-path: var(--move1);
        transform: translate(10px, -10px);
      }

      70% {
        clip-path: var(--move3);
        transform: translate(-10px, 10px);
      }

      80% {
        clip-path: var(--move2);
        transform: translate(10px, -10px);
      }

      90% {
        clip-path: var(--move4);
        transform: translate(-10px, 10px);
      }

      100% {
        clip-path: var(--move1);
        transform: translate(0);
      }
    }
  }

  .img {
    width: 40%;
    height: 100vh;
    background-image: url("https://assets.euromoneydigital.com/dims4/default/a0deac3/2147483647/strip/false/crop/960x891+0+0/resize/960x891!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2Fc9%2Fdf%2F84a11085419a91a833c4bd4c69fb%2Fbitcoin-dollar-960.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 880px) {
    .card {
      flex-direction: column;
    }

    .cta {
      height: 100%;
      width: 100%;
      max-width: 640px;
      margin: 0 auto;

      h1 {
        font-size: 30px;
        line-height: 30px !important;
      }

      .description {
        font-size: 1em;
      }

      .amount {
        font-size: 1.5em;
      }

      button a {
        font-size: 1em;
      }
    }

    .img {
      order: -1;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 512px) {
    .card {
      max-height: 90vh;
    }

    .cta h1 {
      font-size: 2.5em;
    }
  }

  @media (max-width: 380px) {
    .cta {
      padding: 24px;

      h1 {
        font-size: 2em;
      }

      button {
        padding: 16px 0;
        width: 100%;
      }
    }
  }

  @media (max-height: 764px) {
    .card {
      max-height: 100%;
      height: 100vh;
    }
  }
  .error,
  .success {
    font-size: 20px;
    margin-top: 10px;
    font-weight: light;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
`;
