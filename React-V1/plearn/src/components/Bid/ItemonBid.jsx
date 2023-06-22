import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SortingTab from "../SortingTab";
import Loader from "../Loader";
import coin from "../../assets/MarketPlace/A (5).png";
import { useLocation } from "react-router-dom";
import InfoTab from "./InfoTab";
export default React.memo(function ItemonBid({ ds }) {
  const filteredArray = ds
    .filter((obj) => obj.category === "characters")
    .flatMap((obj) => obj.details.filter((detail) => detail.name === "Thor"));
  const firstObject = filteredArray[0];
  const Category = firstObject ? firstObject.category : "";
  const Name = firstObject ? firstObject.name : "";
  const itemID = firstObject ? firstObject.id : "";
  const desc = firstObject ? firstObject.description : "";
  const unlockLevel = firstObject ? firstObject.unlockLevel : "";
  const price = firstObject ? firstObject.cost : "";
  const imgUri = firstObject ? firstObject.imgUri : "";
  // console.log(filteredArray);

  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

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
  useEffect(() => {
    setShowLoader(true);
    if (filteredArray.length === 0) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
    }
  }, [location]);
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Container>
          <SortingTab />
          <div className="head container">
            <div className="right ">
              <div className="blockMain">
                <div className="Imgblock">
                  <div className="Image">
                    <img
                      src="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="top">
                <h1 className="name">{Name}</h1>

                <div class="bnt-conteiner">
                  <div class="bnt-content">
                    <span class="icon-arrow ">
                      <img src={coin} alt="" />
                    </span>
                    <span class="bnt-title">
                      {" "}
                      <span className="price">{price} ETH</span>{" "}
                    </span>
                  </div>
                </div>
                <div className="description">
                  <p className="desc">{desc}</p>
                </div>
                <div className="Categor">
                  <h2>
                    Category : <span className="ca desc">{Category}</span>
                  </h2>
                </div>
              </div>
              <div className="bottom">
                <div className="highest logo-thumbnail ">
                  <img
                    src="https://react-bitakon.netlify.app/assets/img/activity/user-1.jpg"
                    className="round"
                    alt=""
                  />
                  <div className="price">
                    {" "}
                    <span className="desc">
                      {" "}
                      Highest bid by <span className="dark">
                        XANDER_HALL{" "}
                      </span>{" "}
                      <br />
                      0.9945 ETH
                    </span>{" "}
                  </div>
                </div>
                <div className="bidArea">
                  <div className="desc au dark">
                    <span>Auction Ending in</span>
                    <CountdownButton initialTimeLeft={500} />
                  </div>
                  <div className="cancelBid">
                    <button class="cta">
                      <span class="hover-underline-animation">
                        {" "}
                        Cancel Bid{" "}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="info">
                  <InfoTab></InfoTab>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
});
const Container = styled.div`
  background: black;
  .bidArea {
    display: flex;
    width: 76%;
    justify-content: space-between;
    align-items: center;
  }
  .top,
  .au,
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
  }
  .au {
    margin-top: 10px;
    gap: 15px;
    span {
      font-size: 14px;
    }
  }
  .highest {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    align-items: flex-start;
  }
  .head {
    padding-top: 5vh;
    display: flex;
    grid-gap: 6%;
  }
  .right {
    max-width: 60%;
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
      font-family: Rubik, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: white;
      font-size: 50px;
      line-height: 1.1em;
      margin: 25px 0 0 0;
      word-wrap: break-word;
    }
    max-width: 40%;
  }
  .Image img {
    border: 2px solid white;
  }
  .imgGrid {
    display: grid;
    width: 14vw;
  }
  .Imgblock {
    display: flex;
    flex-direction: row;
    .img1 {
      img {
        height: 100%;
        object-fit: cover;
        display: block;
        width: 100%;
      }
    }
  }
  .price {
    font-family: "Space Mono", sans-serif;
    font-size: 16px;
    line-height: 1.6875em;
    font-weight: 400;
    color: #cacaca;
  }
  .ca {
    font-size: 17px;
    text-transform: uppercase;
    cursor: pointer;
  }
  h2 {
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 19px;
    line-height: 1.36842em;
    flex-shrink: 0;
  }
  .desc {
    font-family: "Space Mono", sans-serif;
    font-size: 16px;
    line-height: 1.6875em;
    font-weight: 400;
    color: #cacaca;
  }
  .bnt-conteiner {
    display: flex;
    justify-content: center;
    --color-text: #ffffff;
    --color-background: #ff135a;
    --color-outline: #ff145b80;
    --color-shadow: #00000080;
  }

  .bnt-content {
    display: flex;
    align-items: center;
    padding: 0px 10px;
    gap: 15px;
    text-decoration: none;
    background: var(--color-background);
    transition: 1s;
    border-radius: 100px;
    box-shadow: 0 0 0.2em 0 var(--color-background);
  }
  .dark {
    font-weight: 600;
  }

  .bnt-content:hover,
  .bnt-content:focus {
    transition: 0.5s;
    -webkit-animation: bnt-content 1s;
    animation: bnt-content 1s;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 0.4em 0 var(--color-background);
  }

  .bnt-content .icon-arrow {
    transform: scale(0.8);
  }

  .icon-arrow {
    width: 50px;
  }

  /* Button animations */
  @-webkit-keyframes bnt-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }

  @keyframes bnt-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }
  .Btn {
    padding: 10px 40px;
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

    transition: all 0.2s ease-in;
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
  .cta {
    border: none;
    background: none;
  }

  .cta span {
    padding-bottom: 7px;
    letter-spacing: 4px;
    font-size: 14px;
    padding-right: 15px;
    text-transform: uppercase;
  }

  .hover-underline-animation {
    position: relative;
    color: white;
    padding-bottom: 20px;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
