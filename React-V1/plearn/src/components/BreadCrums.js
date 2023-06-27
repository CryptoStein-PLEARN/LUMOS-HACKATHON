import React, { useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import styled from "styled-components";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "https://www.youtube.com/watch?v=DOPCZDODpaU",
      provider: "youtube",
    },
  ],
};

const options = {
  fullscreen: {
    enabled: true,
    iosNative: false,
  },
  controls: [
    "play-large",
    "play",
    "progress",
    "duration",
    "mute",
    "volume",
    "fullscreen",
  ],
  autoplay: true,
  muted: true,
  loop: { active: true },
  storage: { enabled: false },
};

export default React.memo(function BreadCrums() {
  const [showText, isShowText] = useState(true);

  return (
    <Container>
      <div className="wrapper ">
        <div className="txtcls">
          <h2>
            <span className="rotate-sm"> PLEARN</span>
            <strong>What's Plearn?</strong>
          </h2>
        </div>
        <div className="flex">
          <p
            style={{
              display: `${showText === true ? "block" : "none"}`,
            }}
          >
            PLEARN is a virtual board game aims to raise the awareness of
            financial literacy. PLEARN has a variety of features, interactive
            graphics, realistic scenarios, and entertaining educational elements
            that keep players engaged. The game tests the players'
            problem-solving skills. And also has levels that progressively
            increase in difficulty, allowing players to learn more as they
            advance. Players could track their learning and playing progress
            through the game, while earning rewards and unlocking new areas.
          </p>

          <div className="news">
            <figure className={`article ${showText === true ? "." : "VIEW"}`}>
              <MyComponent className="ifm" />
            </figure>
            <button
              onClick={() => {
                isShowText(!showText);
              }}
              className="button "
              style={{ fontSize: "14px", padding: "10px 16px" }}
            >
              {" "}
              {showText === true ? "VIEW" : "HIDE"}
            </button>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
});
export const MyComponent = React.memo(() => {
  return (
    <>
      <Plyr source={videoSrc} frameborder="0" options={options} />
    </>
  );
});
const Container = styled.div`
  .txtcls {
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: flex-start;
    strong {
      text-decoration: underline;
      cursor: pointer;
      font-size: 46px !important;
    }
  }
  @media only screen and (max-width: 480px) {
    .txtcls {
      padding: 1rem;
      strong {
        font-size: 32px !important;
      }
    }
  }
  .rotate-sm {
    font-family: "Space Mono", sans-serif;
    font-size: 10px;
    line-height: 1.76471em;
    font-weight: 400;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    color: white;
    grid-area: tagline;
    -webkit-letter-spacing: 0.06em;
    -moz-letter-spacing: 0.06em;
    -ms-letter-spacing: 0.06em;
    letter-spacing: 0.06em;
    margin: 7px 0 0 0;
    place-self: end;
    text-transform: uppercase;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb;
    writing-mode: vertical-lr;
  }
  p {
    padding: 60px;
    padding-bottom: 0px;
    padding-right: 45px;
  }
  .wrapper {
    .button,
    .button::after {
      padding: 16px 20px;
      font-size: 18px;
      background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
      border: 0;
      color: #fff;
      letter-spacing: 3px;
      line-height: 1;
      box-shadow: 6px 0px 0px #00e6f6;
      outline: transparent;
      position: relative;
    }

    .button::after {
      --slice-0: inset(50% 50% 50% 50%);
      --slice-1: inset(80% -6px 0 0);
      --slice-2: inset(50% -6px 30% 0);
      --slice-3: inset(10% -6px 85% 0);
      --slice-4: inset(40% -6px 43% 0);
      --slice-5: inset(80% -6px 5% 0);
      content: "HOVER ME";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent 3%,
        #00e6f6 3%,
        #00e6f6 5%,
        #ff013c 5%
      );
      text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
      clip-path: var(--slice-0);
    }

    .button:hover::after {
      animation: 1s glitch;
      animation-timing-function: steps(2, end);
    }

    @keyframes glitch {
      0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
      }

      10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
      }

      20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
      }

      30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
      }

      40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
      }

      50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
      }

      60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
      }

      70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
      }

      80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
      }

      90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
      }

      100% {
        clip-path: var(--slice-1);
        transform: translate(0);
      }
    }
  }
  .flex {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-center;
    p {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 680px) {
    p {
      padding: 60px;
      padding-top: 15px;
      padding-bottom: 0px;
      padding-right: 50px;
      font-size: 12px !important;
    }
  }
`;
