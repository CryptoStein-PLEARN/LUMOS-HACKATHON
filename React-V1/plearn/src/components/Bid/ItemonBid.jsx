import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SortingTab from "../SortingTab";
import Loader from "../Loader";
import coin from "../../assets/MarketPlace/A (5).png";
import { useLocation } from "react-router-dom";
import InfoTab from "./InfoTab";
import axios from "axios";

export default React.memo(function ItemonBid({ ds }) {
  const character = useLocation();
  const values = character.pathname.split("/").slice(-2); // Extract the last two values
  const [showBidInput, setShowBidInput] = useState(false);
  const [bidPlaced, setBidPlaced] = useState(false);
  const [bidValue, setBidValue] = useState("");
  const Category = values[0];
  const ItemName = values[1];
  const filteredArray = ds
    .filter((obj) => obj.category === Category)
    .flatMap((obj) => obj.details.filter((detail) => detail.name === ItemName));
  const firstObject = filteredArray[0];
  const desc = firstObject ? firstObject.description : "";
  const price = firstObject ? firstObject.cost : "";
  const transaction = firstObject ? firstObject.transactions : {};

  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [btnLoader, setLoding] = useState(false);
  const [responseLog, setLog] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const EndAuction = async () => {
    const data = {
      category: Category,
      id: filteredArray[0]?.id,
    };
    await axios
      .post("https://plearn-backend.onrender.com/endAuction", data)
      // .post("http://localhost:8080/endAuction", data)
      .then((response) => {
        console.log(response.data);
      });
  };

  const [itemAuctionDetails, setItemAuctionDetails] = useState(null);
  const placedRef = useRef(false);
  async function GetItemAuctionDetail() {
    try {
      const response = await axios.get(
        `https://plearn-backend.onrender.com/getAuctionDetails/${Category}/${filteredArray[0]?.id}`
        // `http://localhost:8080/getAuctionDetails/${Category}/${filteredArray[0]?.id}`
      );
      setItemAuctionDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetItemAuctionDetail();
  }, [location, placedRef.current]);

  const CountdownButton = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = new Date();
        const endTime = new Date(filteredArray[0].auctionEndTime);
        const timeDiff = endTime - currentTime;
        if (timeDiff <= 0) {
          clearInterval(interval);
          setTimeLeft("");
          EndAuction();
        } else {
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutes = Math.floor(
            (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          setTimeLeft(`${hours}:${minutes}:${seconds}`);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <button className="Btn" key="countdown-btn">
        {timeLeft !== "" ? timeLeft : "View Bid!"}
      </button>
    );
  };

  async function handlePlaceBid() {
    setLoding(true);
    const data = {
      category: Category,
      id: filteredArray[0].id,
      bid: {
        bidderAddress: localStorage.getItem(1),
        bidAmount: parseInt(bidValue),
        currency: "ETH",
        USDValue: 100,
      },
    };

    const response = await axios.post(
      `https://plearn-backend.onrender.com/placeBid`,
      data
    );

    console.log(response.data);
    if (response.data) {
      setLoding(false);
      handleCancelBid();
      setLog(response.data.message);
      setTimeout(() => {
        setLog("");
      }, 2000);
      GetItemAuctionDetail();
    }
  }

  const handlePlaceBidClick = () => {
    setShowBidInput(true);
  };
  const handleCancelBid = () => {
    setShowBidInput(false);
    setBidPlaced(false);
    setBidValue("");
  };

  const handleBidInputChange = (e) => {
    setBidValue(e.target.value);
  };
  const highestBidder =
    itemAuctionDetails?.item?.bids[itemAuctionDetails?.item?.bids.length - 1]
      .bid.length > 0
      ? itemAuctionDetails?.item?.bids[
          itemAuctionDetails?.item?.bids.length - 1
        ].bid.reduce((maxBid, currentBid) =>
          currentBid.bidAmount > maxBid.bidAmount ? currentBid : maxBid
        ).bidderAddress
      : "No bids";
  const highestBid =
    itemAuctionDetails?.item?.bids[itemAuctionDetails?.item?.bids.length - 1]
      .bid.length > 0
      ? itemAuctionDetails.item.bids[
          itemAuctionDetails.item.bids.length - 1
        ].bid.reduce((maxBid, currentBid) =>
          currentBid.bidAmount > maxBid.bidAmount ? currentBid : maxBid
        ).bidAmount
      : "";
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
                    <img src={filteredArray[0]?.imgUri} alt="" />
                  </div>
                </div>
              </div>
              <>
                <h1>details</h1>
              </>
            </div>
            <div className="left">
              <div className="top">
                <h1 className="name">{ItemName}</h1>

                <div className="bnt-conteiner">
                  <div className="bnt-content">
                    BASE PRICE:
                    <span className="bnt-title">
                      {" "}
                      <span className="price">
                        {itemAuctionDetails?.item?.basePrice}{" "}
                      </span>{" "}
                    </span>
                    <span className="icon-arrow ">
                      <img src={coin} alt="" />
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
                  {itemAuctionDetails &&
                  itemAuctionDetails?.item?.bids[
                    itemAuctionDetails?.item?.bids.length - 1
                  ].bid.length > 0 ? (
                    <div className="price">
                      <span className="desc">Highest bid by </span>
                      <div className="dark">
                        <span className="red">
                          {" "}
                          {highestBidder.slice(0, 5)}
                        </span>
                        &nbsp;of&nbsp;<span className="red">{highestBid}</span>
                        &nbsp;ETH
                      </div>
                    </div>
                  ) : (
                    <div className="price">
                      <span className="desc">No bids yet</span>
                    </div>
                  )}
                </div>
                <div className="bidArea">
                  <div className="desc au dark">
                    <span>Auction Ending in</span>
                    <CountdownButton />
                  </div>
                  <div className="cancelBid">
                    <div className="cancelBid">
                      {bidPlaced ? (
                        <div>Placed</div>
                      ) : showBidInput ? (
                        <div className="flex">
                          <div className="form__group field">
                            <input
                              required
                              placeholder="Name"
                              className="form__field"
                              type="number"
                              value={bidValue}
                              onChange={handleBidInputChange}
                            />
                            <label className="form__label" htmlFor="name">
                              Enter your Bid
                            </label>
                          </div>
                          <div className="flx">
                            <button
                              onClick={handlePlaceBid}
                              className="contactButton"
                            >
                              {btnLoader ? (
                                <div className="loader">
                                  <div className="bar1"></div>
                                  <div className="bar2"></div>
                                  <div className="bar3"></div>
                                  <div className="bar4"></div>
                                  <div className="bar5"></div>
                                  <div className="bar6"></div>
                                  <div className="bar7"></div>
                                  <div className="bar8"></div>
                                  <div className="bar9"></div>
                                  <div className="bar10"></div>
                                  <div className="bar11"></div>
                                  <div className="bar12"></div>
                                </div>
                              ) : (
                                <>
                                  Place
                                  <div className="iconButton">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path
                                        fill="currentColor"
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                      ></path>
                                    </svg>
                                  </div>{" "}
                                </>
                              )}
                            </button>
                            <div className="ms">
                              <button onClick={handleCancelBid}>
                                <span className="shadow"></span>
                                <span className="edge"></span>
                                <span className="front text">Cancel</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <button className="cta" onClick={handlePlaceBidClick}>
                          <span className="hover-underline-animation">
                            Place Bid
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                  {responseLog ? <p className="rose">{responseLog}</p> : <></>}
                </div>
                <div className="info">
                  <InfoTab transaction={itemAuctionDetails}></InfoTab>
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
  .info {
    margin-top: 10vh;
    width: 100%;
  }
  .react-tabs__tab-list {
    display: flex;
    justify-content: space-around;
    .react-tabs__tab {
      padding: 6px 50px !important;
    }
  }
  .rose {
    padding: 20px;
    color: #e11d48;
    padding-top: 0;
  }

  .loader {
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 10px;
  }

  .loader div {
    width: 8%;
    height: 24%;
    background: white;
    position: absolute;
    left: 50%;
    top: 30%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: fade458 1s linear infinite;
  }

  @keyframes fade458 {
    from {
      opacity: 1;
    }

    to {
      opacity: 0.25;
    }
  }

  .loader .bar1 {
    transform: rotate(0deg) translate(0, -130%);
    animation-delay: 0s;
  }

  .loader .bar2 {
    transform: rotate(30deg) translate(0, -130%);
    animation-delay: -1.1s;
  }

  .loader .bar3 {
    transform: rotate(60deg) translate(0, -130%);
    animation-delay: -1s;
  }

  .loader .bar4 {
    transform: rotate(90deg) translate(0, -130%);
    animation-delay: -0.9s;
  }

  .loader .bar5 {
    transform: rotate(120deg) translate(0, -130%);
    animation-delay: -0.8s;
  }

  .loader .bar6 {
    transform: rotate(150deg) translate(0, -130%);
    animation-delay: -0.7s;
  }

  .loader .bar7 {
    transform: rotate(180deg) translate(0, -130%);
    animation-delay: -0.6s;
  }

  .loader .bar8 {
    transform: rotate(210deg) translate(0, -130%);
    animation-delay: -0.5s;
  }

  .loader .bar9 {
    transform: rotate(240deg) translate(0, -130%);
    animation-delay: -0.4s;
  }

  .loader .bar10 {
    transform: rotate(270deg) translate(0, -130%);
    animation-delay: -0.3s;
  }

  .loader .bar11 {
    transform: rotate(300deg) translate(0, -130%);
    animation-delay: -0.2s;
  }

  .loader .bar12 {
    transform: rotate(330deg) translate(0, -130%);
    animation-delay: -0.1s;
  }
  .flx {
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    .ms {
      button {
        position: relative;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
        transition: filter 250ms;
        user-select: none;
        touch-action: manipulation;
      }

      .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: hsl(0deg 0% 0% / 0.25);
        will-change: transform;
        transform: translateY(2px);
        transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
      }

      .edge {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: linear-gradient(
          to left,
          hsl(340deg 100% 16%) 0%,
          hsl(340deg 100% 32%) 8%,
          hsl(340deg 100% 32%) 92%,
          hsl(340deg 100% 16%) 100%
        );
      }

      .front {
        display: block;
        position: relative;
        padding: 10px 22px;
        border-radius: 12px;
        font-size: 17px;
        color: white;
        background: hsl(345deg 100% 47%);
        will-change: transform;
        transform: translateY(-4px);
        transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
      }

      button:hover {
        filter: brightness(110%);
      }

      button:hover .front {
        transform: translateY(-6px);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      }

      button:active .front {
        transform: translateY(-2px);
        transition: transform 34ms;
      }

      button:hover .shadow {
        transform: translateY(4px);
        transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
      }

      button:active .shadow {
        transform: translateY(1px);
        transition: transform 34ms;
      }

      button:focus:not(:focus-visible) {
        outline: none;
      }
    }
  }
  .flex {
    width: 20vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
    flex-direction: column;
    margin-bottom: 10vh;
  }
  .bidArea {
    display: flex;
    height: 25vh;
    gap: 40px;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .top,
  .au,
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
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
    align-items: center;
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
      margin: 0px 0 0 0;
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
    .red {
      color: #ff135a;
    }
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
    font-size: 17px;
    padding-right: 15px;
    padding-left: 15px;
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
  .form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    max-width: 180px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #6b6b6b;
    outline: 0;
    font-size: 17px;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #ffe699;
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #ffe699, #5d3294);
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #ffe699;
    font-weight: 700;
  }

  /* reset input */
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .contactButton {
    background: #7079f0;
    color: white;
    font-family: inherit;
    padding: 0.45em;
    padding-left: 1em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3em;
  }

  .iconButton {
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7a8cf3;
    right: 0.3em;
    transition: all 0.3s;
  }

  .contactButton:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em #5566c2;
  }

  .contactButton:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em #5566c2;
  }
`;
