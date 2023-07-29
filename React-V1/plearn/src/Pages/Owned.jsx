import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Owned() {
  const [time, setTime] = useState(2 * 60 * 60);
  const startTime = useRef(Date.now());
  const card = useSelector((state) => state.Owned.data);
  const nav = useNavigate();

  console.log(card);
  const CountdownButton = ({ initialTimeLeft }) => {
    const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, [timeLeft]);

    const formatTime = (time) => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${hours}:${minutes}:${seconds}`;
    };

    return (
      <button className="Btn">
        {timeLeft > 0 ? `${formatTime(timeLeft)}` : "View Bid!"}
      </button>
    );
  };
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
  }, [location]);
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Container>
          <div className="container">
            <div className="left">
              <h1>Collection</h1>
              <p>Cool Collection you own!</p>
            </div>
          </div>
          <div className="CardsL">
            <div className="market">
              {card.map((Category) => (
                <div className="marketplace__item" key={Category.id}>
                  <div className="marketplace__image">
                    <img
                      width="378"
                      height="390"
                      src={Category.imgUri}
                      className="imgT"
                      alt=""
                    />
                  </div>
                  <div className="marketplace__meta">
                    <div className="marketplace__meta-item">
                      <div className="marketplace__meta-author">
                        <h3 className="marketplace__meta-title">
                          <a href="index.html" className="">
                            {Category.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="marketplace_go-to">
                    <div className="Mid">
                      <button disabled className=" dis">
                        OWNED
                      </button>
                      {Category.inAuction ? (
                        <p>InAuction</p>
                      ) : (
                        <Link
                          className="Btn"
                          to={`/Buy/${Category.category}/${Category.name}`}
                        >
                          Sell item
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="marketplace__item"
                onClick={() => {
                  nav("/bid/characters/Thor");
                }}
              >
                <div className="OnSale"> </div>
                <div className="marketplace__image">
                  <img
                    width="378"
                    height="390"
                    src="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300"
                    className="imgT"
                    alt=""
                  />
                </div>
                <div className="marketplace__meta">
                  <div className="marketplace__meta-item">
                    <div className="marketplace__meta-author">
                      <h3 className="marketplace__meta-title">
                        DIRTY DEAD PIRATE
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="marketplace_go-to">
                  <div className="Mid">
                    <button disabled className=" dis">
                      OWNED
                    </button>
                    <CountdownButton initialTimeLeft={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.section`
  background: black;
  padding-top: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-end;
  flex-direction: column;
  .market {
    margin: 10vw;
    margin-top: 5vw;
    display: grid;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .left {
    h1 {
      font-family: Rubik, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-size: 46px;
      line-height: 1.1em;
      margin: 20px 0;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
    }

    border-bottom: 1px solid white;
  }
  .Mid {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      position: relative;
      padding: 10px 20px;
      border-radius: 7px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      color: #fff;
      box-shadow: 0 0 0 0 transparent;
    }
    .Btn {
      position: relative;
      padding: 10px 20px;
      border-radius: 7px;
      border: 1px solid rgb(61, 106, 255);
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      background: transparent;
      color: #fff;
      overflow: hidden;
      box-shadow: 0 0 0 0 transparent;
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }

    .Btn:hover {
      background: rgb(61, 106, 255);
      box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }

    .Btn:hover::before {
      -webkit-animation: sh02 0.5s 0s linear;
      -moz-animation: sh02 0.5s 0s linear;
      animation: sh02 0.5s 0s linear;
    }

    .Btn::before {
      content: "";
      display: block;
      width: 0px;
      height: 86%;
      position: absolute;
      top: 7%;
      left: 0%;
      opacity: 0;
      background: #fff;
      box-shadow: 0 0 50px 30px #fff;
      -webkit-transform: skewX(-20deg);
      -moz-transform: skewX(-20deg);
      -ms-transform: skewX(-20deg);
      -o-transform: skewX(-20deg);
      transform: skewX(-20deg);
    }

    @keyframes sh02 {
      from {
        opacity: 0;
        left: 0%;
      }

      50% {
        opacity: 1;
      }

      to {
        opacity: 0;
        left: 100%;
      }
    }

    .Btn:active {
      box-shadow: 0 0 0 0 transparent;
      -webkit-transition: box-shadow 0.2s ease-in;
      -moz-transition: box-shadow 0.2s ease-in;
      transition: box-shadow 0.2s ease-in;
    }
  }
  .OnSale {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    width: 150px;
    height: 150px;
  }
  .OnSale::before {
    content: "Auction";
    position: absolute;
    width: 150%;
    height: 40px;
    background-image: linear-gradient(
      45deg,
      #ff6547 0%,
      #ffb144 51%,
      #ff7053 100%
    );
    transform: rotate(-45deg) translateX(-60px) translateY(-43px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
  }
`;
