import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
export default React.memo(function Error({ Navv }) {
  return (
    <Container>
      <div className="flex">
        <h1>Hey,Looks Like You are Lost..?</h1>
        <button>
          <div class="blackhole">
            <span class="ring">
              <span class="block"></span>
            </span>
          </div>
          <span class="text">
            <a className="link" href="/">
              Don't get lost
            </a>
          </span>
        </button>
      </div>
      <div className="box-of-star1">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star2">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star3">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star4">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>``
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="astronaut" data-js="astro">
        <div className="head"></div>
        <div className="arm arm-left"></div>
        <div className="arm arm-right"></div>
        <div className="body">
          <div className="panel"></div>
        </div>
        <div className="leg leg-left"></div>
        <div className="leg leg-right"></div>
        <div className="schoolbag"></div>
      </div>
      <Footer />
    </Container>
  );
});
const Container = styled.div`
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 11;
    align-items: center;
    button {
      margin-top: 4vh;
      margin-bottom: 4vh;
      --black-hole-color-2: rgb(242, 122, 42);
      --black-hole-color: rgb(230, 148, 93);
      font-size: 17px;
      position: relative;
      background: #212121;
      padding: 0.5em;
      border: 2px solid var(--black-hole-color);
      border-radius: 8px;
    }

    button:hover {
      border: 2px solid var(--black-hole-color-2);
      animation: alert 1s alternate infinite linear;
    }

    .blackhole {
      padding: 3em;
      background-color: black;
      color: var(--black-hole-color);
      position: absolute;
      animation: wiggle 3s alternate-reverse infinite linear;
      top: -1em;
      left: -8em;
    }

    .blackhole,
    .blackhole::after,
    .blackhole::before,
    .blackhole .ring,
    .blackhole .ring::after {
      content: "";
      border: 2px solid var(--black-hole-color);
      border-radius: 50%;
      box-shadow: 0 0 3em, 0 0 1em;
    }

    .blackhole::after,
    .blackhole::before {
      animation: writhe 3s alternate-reverse infinite linear;
    }

    .blackhole::before {
      position: absolute;
      width: calc(100% + 0.5em);
      height: calc(100% + 0.5em);
      top: -9px;
      left: -7px;
    }

    .blackhole::after {
      position: absolute;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      top: -6px;
      left: -5px;
    }

    .blackhole .ring,
    .blackhole .ring::after {
      content: "";
      position: absolute;
      left: -50%;
      width: 200%;
      border-top: none;
      height: 2em;
      border-width: 5px;
      box-shadow: 0px 5px 10px var(--black-hole-color);
    }

    .blackhole .ring,
    .blackhole .ring::after {
      animation: ring-writhe 3s alternate-reverse infinite linear;
    }

    .blackhole .block {
      position: absolute;
      z-index: 90;
      content: "";
      background-color: black;
      top: -20%;
      left: 25%;
      width: 50%;
      height: 10px;
    }

    .blackhole .ring::after {
      width: 110%;
      left: -8%;
    }

    .blackhole .rocket {
      fill: white;
      height: 30px;
      transform: rotate(-140deg);
      animation: idle 1s alternate-reverse infinite linear;
    }

    button .text {
      display: flex;
      color: white;
    }

    @keyframes idle {
      from {
        transform: rotate(-130deg);
      }

      to {
        transform: rotate(-140deg);
      }
    }

    @keyframes alert {
      from {
        box-shadow: 0 0 0 var(--black-hole-color);
      }

      to {
        box-shadow: 0 0 8px var(--black-hole-color);
      }
    }

    @keyframes engine-start {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(1.05);
      }
    }

    @keyframes descend {
      from {
        top: -60px;
        right: -60px;
        transform: scale(1);
      }

      to {
        top: -10px;
        right: -10px;
        transform: scale(0.8);
      }
    }

    @keyframes descend-dissapear {
      from {
        top: -10px;
        right: -10px;
        transform: scale(1);
      }

      to {
        top: 20px;
        right: 20px;
        transform: scale(0);
      }
    }

    @keyframes writhe {
      from {
        box-shadow: -4px -3px 35px var(--black-hole-color-2), -4px -3px 5px;
        transform: translateX(-1px) scale(1);
      }

      to {
        box-shadow: 4px 3px 35px, 4px 3px 5px var(--black-hole-color-2);
        transform: translateX(1px) scale(0.95);
      }
    }

    @keyframes wiggle {
      from {
        transform: translateX(-3px);
      }

      to {
        transform: translateX(3px);
      }
    }

    @keyframes ring-writhe {
      from {
        transform: translateX(-2px) scale(1);
        box-shadow: -2px 5px 10px var(--black-hole-color);
      }

      to {
        box-shadow: 2px 5px 10px var(--black-hole-color-2);
        transform: translateX(2px) scale(0.95);
      }
    }
  }
  width: 100vw;
  height: 200vh;
  background: black;
  h1 {
    margin: 0;
  }

  @keyframes snow {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }

    20% {
      opacity: 1;
    }

    100% {
      opacity: 1;
      transform: translateY(650px);
    }
  }

  @keyframes astronaut {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .box-of-star1,
  .box-of-star2,
  .box-of-star3,
  .box-of-star4 {
    width: 100%;
    position: absolute;
    z-index: 10;
    left: 0;
    transform: translateY(650px);
    height: 700px;
  }

  .box-of-star1 {
    animation: snow 5s linear infinite;
  }

  .box-of-star2 {
    animation: snow 5s -1.64s linear infinite;
  }

  .box-of-star3 {
    animation: snow 5s -2.3s linear infinite;
  }

  .box-of-star4 {
    animation: snow 5s -3.3s linear infinite;
  }

  .star {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    z-index: 10;
    opacity: 0.7;
  }

  .star:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    z-index: 10;
    top: 80px;
    left: 70px;
    opacity: 0.7;
  }

  .star:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    z-index: 10;
    top: 8px;
    left: 170px;
    opacity: 0.9;
  }

  .star-position1 {
    top: -110px;
    left: 20px;
  }

  .star-position2 {
    top: -10px;
    left: 250px;
  }

  .star-position3 {
    top: -60px;
    left: 570px;
  }

  .star-position4 {
    top: 30px;
    left: 900px;
  }

  .star-position5 {
    top: -20px;
    left: 1120px;
  }

  .star-position6 {
    top: -130px;
    left: 1280px;
  }

  .star-position7 {
    top: -130px;
    left: 1480px;
  }

  .astronaut {
    width: 250px;
    height: 300px;
    position: absolute;
    z-index: 11;
    top: calc(50% - 120px);
    left: calc(50% - 125px);
    animation: astronaut 5s linear infinite;
  }

  .schoolbag {
    width: 100px;
    height: 150px;
    position: absolute;
    z-index: 1;
    top: calc(50% - 75px);
    left: calc(50% - 50px);
    background-color: #94b7ca;
    border-radius: 50px 50px 0 0 / 30px 30px 0 0;
  }

  .head {
    width: 97px;
    height: 80px;
    position: absolute;
    z-index: 3;
    background: -webkit-linear-gradient(
      left,
      #e3e8eb 0%,
      #e3e8eb 50%,
      #fbfdfa 50%,
      #fbfdfa 100%
    );
    border-radius: 50%;
    top: 34px;
    left: calc(50% - 47.5px);
  }

  .head:after {
    content: "";
    width: 60px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 30px);
    background: -webkit-linear-gradient(
      top,
      #15aece 0%,
      #15aece 50%,
      #0391bf 50%,
      #0391bf 100%
    );
    border-radius: 15px;
  }

  .head:before {
    content: "";
    width: 12px;
    height: 25px;
    position: absolute;
    top: calc(50% - 12.5px);
    left: -4px;
    background-color: #618095;
    border-radius: 5px;
    box-shadow: 92px 0px 0px #618095;
  }

  .body {
    width: 85px;
    height: 100px;
    position: absolute;
    z-index: 2;
    background-color: #fffbff;
    border-radius: 40px / 20px;
    top: 105px;
    left: calc(50% - 41px);
    background: -webkit-linear-gradient(
      left,
      #e3e8eb 0%,
      #e3e8eb 50%,
      #fbfdfa 50%,
      #fbfdfa 100%
    );
  }

  .panel {
    width: 60px;
    height: 40px;
    position: absolute;
    top: 20px;
    left: calc(50% - 30px);
    background-color: #b7cceb;
  }

  .panel:before {
    content: "";
    width: 30px;
    height: 5px;
    position: absolute;
    top: 9px;
    left: 7px;
    background-color: #fbfdfa;
    box-shadow: 0px 9px 0px #fbfdfa, 0px 18px 0px #fbfdfa;
  }

  .panel:after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    top: 9px;
    right: 7px;
    background-color: #fbfdfa;
    border-radius: 50%;
    box-shadow: 0px 14px 0px 2px #fbfdfa;
  }

  .arm {
    width: 80px;
    height: 30px;
    position: absolute;
    top: 121px;
    z-index: 2;
  }

  .arm-left {
    left: 30px;
    background-color: #e3e8eb;
    border-radius: 0 0 0 39px;
  }

  .arm-right {
    right: 30px;
    background-color: #fbfdfa;
    border-radius: 0 0 39px 0;
  }

  .arm-left:before,
  .arm-right:before {
    content: "";
    width: 30px;
    height: 70px;
    position: absolute;
    top: -40px;
  }

  .arm-left:before {
    border-radius: 50px 50px 0px 120px / 50px 50px 0 110px;
    left: 0;
    background-color: #e3e8eb;
  }

  .arm-right:before {
    border-radius: 50px 50px 120px 0 / 50px 50px 110px 0;
    right: 0;
    background-color: #fbfdfa;
  }

  .arm-left:after,
  .arm-right:after {
    content: "";
    width: 30px;
    height: 10px;
    position: absolute;
    top: -24px;
  }

  .arm-left:after {
    background-color: #6e91a4;
    left: 0;
  }

  .arm-right:after {
    right: 0;
    background-color: #b6d2e0;
  }

  .leg {
    width: 30px;
    height: 40px;
    position: absolute;
    z-index: 2;
    bottom: 70px;
  }

  .leg-left {
    left: 76px;
    background-color: #e3e8eb;
    transform: rotate(20deg);
  }

  .leg-right {
    right: 73px;
    background-color: #fbfdfa;
    transform: rotate(-20deg);
  }

  .leg-left:before,
  .leg-right:before {
    content: "";
    width: 50px;
    height: 25px;
    position: absolute;
    bottom: -26px;
  }

  .leg-left:before {
    left: -20px;
    background-color: #e3e8eb;
    border-radius: 30px 0 0 0;
    border-bottom: 10px solid #6d96ac;
  }

  .leg-right:before {
    right: -20px;
    background-color: #fbfdfa;
    border-radius: 0 30px 0 0;
    border-bottom: 10px solid #b0cfe4;
  }
`;
