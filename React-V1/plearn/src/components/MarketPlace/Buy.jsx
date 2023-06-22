import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SortingTab from "../SortingTab";
import Loader from "../Loader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import coin from "../../assets/MarketPlace/A (5).png";
export default React.memo(function Buy({ ds }) {
  const [playerLevel, setPlayerLevel] = useState(1);
  const [gameCoins, setGameCoins] = useState(10);
  const [itemAvailable, setItemAvailable] = useState(ds.itemAvailable);
  const itemName = ds.name;
  const itemID = ds.id;
  const description = ds.description;
  const unlockLevel = ds.unlockLevel;
  const cost = ds.cost;
  const imgUri = ds.imgUri;
  const [successMessage, setSuccessMessage] = useState("");
  const data = useState({});
  const location = useLocation();
  const path = location.pathname;
  const pathArray = path.split("/");
  const category = pathArray[pathArray.length - 2];
  const [showLoader, setShowLoader] = useState(false);
  const [butnLoader, setLoader] = useState(false);
  useEffect(() => {
    getUserDetails();
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 500);
  }, [location]);

  const getUserDetails = async () => {
    const userDetails = {
      userAccount: localStorage.getItem(1),
    };

    axios
      .post("https://plearn-backend.onrender.com/", userDetails)
      // axios.post("http://localhost:8080/", userDetails)
      .then((response) => {
        setPlayerLevel(response.data.level);
        setGameCoins(response.data.gameCoins);
      });
  };

  const BuyNFTs = async () => {
    setLoader(true);
    const userDetails = {
      userAccount: localStorage.getItem(1),
      userLevel: playerLevel,
      userGameCoins: gameCoins,
      category: category,
      itemID: itemID,
    };
    const transactionDetails = {
      buyerAddress: localStorage.getItem(1),
      sellerAddress: ds.currentOwner,
      cost: ds.cost,
      timestamp: new Date(),
    };

    const requestData = {
      userDetails: userDetails,
      transactionDetails: transactionDetails,
    };
    await axios
      .post(
        "https://plearn-backend.onrender.com/buyFromMarketplace",
        requestData
      )
      // .post(`http://localhost:8080/buyFromMarketplace`, requestData)
      .then((response) => {
        setSuccessMessage(response.data.message);
        setLoader(false);
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
        console.log(response.data);
        setGameCoins(response.data.userGameCoins);
        setItemAvailable(response.data.itemAvailable);
        // Set the global state of 'itemAvailable' after successful transaction
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    <img src={imgUri} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <div className="top">
                <div class="notification">
                  <div class="notification-bottom">
                    <span class="level">Level {playerLevel}</span>
                    <button class="next-level-button">
                      Gamecoins: {gameCoins}
                    </button>
                  </div>
                </div>
                <h1 className="name">{itemName}</h1>
                <div className="Categor">
                  <h3>
                    Category : <span className="ca desc">{category}</span>
                  </h3>
                </div>
                <div className="description">
                  {/* <p className="desc">{description}</p> */}
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugiat, quo obcaecati nihil neque, vitae atque officiis
                    fugit laudantium repudiandae magnam sint maxime ratione,
                    asperiores iste. Quaerat laudantium perspiciatis similique
                    laborum.
                  </p>
                </div>
              </div>
              <div className="bottom">
                <h2 className="price">Unlocks at : Level {unlockLevel}</h2>

                <div class="cta">
                  {itemAvailable ? (
                    <>
                      {butnLoader ? (
                        <>Processing Transaction...</>
                      ) : (
                        <button class="butn butn--primary" onClick={BuyNFTs}>
                          <span class="icon-arrow ">
                            <img src={coin} alt="" />
                          </span>
                          <span class="butn-inner">
                            <span class="butn-label">Cost: {cost} ETH</span>
                            <span class="butn-blur" aria-hidden=""></span>
                          </span>
                        </button>
                      )}
                    </>
                  ) : (
                    <button class="bstn">Item not on Sale</button>
                  )}
                  <div className="mt-5">{successMessage}</div>
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
  .bstn {
    margin: 12px;
    height: 50px;
    width: 160px;
    border-radius: 10px;
    background: #333;
    justify-content: center;
    align-items: center;
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444,
      inset -5px -5px 10px #222;
    font-family: "Damion", cursive;
    border: none;
    font-size: 16px;
    color: rgb(161, 161, 161);
    transition: 500ms;
  }

  .bstn:hover {
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222,
      inset -5px -5px 10px #444;
    color: #d6d6d6;
    transition: 500ms;
  }
  .notification {
    position: relative;
    width: 20vw;
    height: 6vh;
    background-color: @e69c9c;
    border-radius: 10px;
    -webkit-box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  @media (prefers-color-scheme: dark) {
    .notification {
      --bg-color: #6937b3;
      background: #7c3cdd;
      box-shadow: 44px 44px 88px #7137c9, -44px -44px 88px #8741f1;
      --text-color: #fff;
      --highlight-color: #fc9a32;
      --button-color: #3d3f4e;
    }
  }

  .notification-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 20px;
  }

  .level {
    color: var(--text-color);
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
  }

  .next-level-button {
    background-color: #efefef;
    color: #000;
    font-weight: 600;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0px 0px 10px #888888;
    box-shadow: 0px 0px 10px #888888;
  }

  .next-level-button:hover {
    background-color: #efefef;
    color: #000;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 15px #888888;
    box-shadow: 0px 0px 15px #888888;
  }

  .notification {
    background-color: #1e2b3c;
    color: #c3daf6;
  }

  .notification:hover {
    background-color: #c3daf6;
    color: #1e2b3c;
  }

  .next-level-button:hover {
    background-color: #efefef;
    color: #1e2b3c;
  }
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
  .price {
    width: 35%;
    padding-top: 5px;
    padding-bottom: 5px;

    letter-spacing: 1px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    background: #7c3cdd;
    box-shadow: 44px 44px 88px #7137c9, -44px -44px 88px #8741f1;
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
    width: 44vw;
    border: 2px solid white;
  }
  .imgGrid {
    display: grid;
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

  .ca {
    font-size: 17px;
    text-transform: uppercase;
    cursor: pointer;
  }
  h2,
  h3 {
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 19px;
    line-height: 1.36842em;
    color: white;
    flex-shrink: 0;
  }
  h3 {
    font-size: 16px;
  }
  .desc {
    font-family: "Space Mono", sans-serif;
    font-size: 16px;
    line-height: 1.6875em;
    font-weight: 400;
    color: #cacaca;
  }

  .dark {
    font-weight: 600;
  }

  .icon-arrow {
    img {
      width: 50px;
    }
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
    letter-spacing: 1px;
    font-size: 12px;
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

  .butn {
    --butn-gradient: var(--butn-gradient-from), var(--butn-gradient-to);
    border: 0 none;
    appearance: none;
    border-radius: 9999px;
    background-color: var(--butn-bg);
    box-shadow: 0 0 2px 2px var(--butn-shadow), 0 0 4px 4px var(--butn-shadow),
      0 0 8px 8px var(--butn-shadow);
  }

  .butn,
  .butn * {
    box-sizing: border-box;
  }

  .butn-inner {
    position: relative;
    border-radius: inherit;
    border: 1px solid transparent;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-family: "Space Mono", sans-serif;
    min-width: 10rem;
    padding: 1.5rem 2rem;
    overflow: hidden;
    color: var(--butn-text-color);
  }

  .butn-label {
    position: absolute;
    bottom: 1px;
    left: 1px;
    right: 1px;
    top: 1px;
    border-radius: inherit;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--butn-bg);
    background-image: linear-gradient(to bottom, var(--butn-gradient));
  }

  .butn-blur {
    position: absolute;
    bottom: 1px;
    left: 1px;
    right: 1px;
    top: 1px;
    z-index: 0;
    transform: scaleX(3.5);
    filter: blur(6px);
  }

  .butn-blur:before {
    --gradient: var(--butn-color-from), var(--butn-color), var(--butn-color-to);
    --transition: 5s;
    content: "";
    position: absolute;
    z-index: 0;
    top: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: conic-gradient(var(--gradient));
    animation: turn var(--transition) linear infinite;
  }

  .butn:hover,
  .butn:active {
    transition: transform 0.5s ease-in-out 0s;
    transform: translateY(-1px);
  }

  .butn:active .butn-blur:before {
    --transition: 2s;
  }

  .butn--primary {
    --butn-bg: #111111;
    --butn-gradient-from: #111111;
    --butn-gradient-to: rgba(255, 255, 255, 0.1);
    --butn-text-color: #ffffff;
    --butn-color: #5f17d4;
    --butn-color-from: #c6a3ff;
    --butn-color-to: #966ed8;
    --butn-shadow: #5f17d42d;
  }

  @keyframes turn {
    0% {
      transform: translateY(-50%) rotate(0deg);
    }

    to {
      transform: translateY(-50%) rotate(1turn);
    }
  }
`;
