import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SortingTab from "../SortingTab";
import Loader from "../Loader";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default React.memo(function Buy({ ds }) {
  console.log(ds);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [gameCoins, setGameCoins] = useState(10);
  const itemName = ds.name;
  const itemID = ds.id;
  const description = ds.description;
  const unlockLevel = ds.unlockLevel;
  const cost = ds.cost;
  const [successMessage, setSuccessMessage] = useState("");
  const data = useState({});
  const location = useLocation();
  const path = location.pathname;
  const pathArray = path.split("/");
  const category = pathArray[pathArray.length - 2];
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getUserDetails();
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 500);
  }, [location]);

  const getUserDetails = async () => {
    const userDetails = {
      userAccount: localStorage.getItem(1),
    }

    axios.post("https://plearn-backend.onrender.com/", userDetails)
    // axios.post("http://localhost:8080/", userDetails)
    .then((response) => {
      setPlayerLevel(response.data.level);
      setGameCoins(response.data.gameCoins);
    })
  }

  // Set coins value correclty for each user
  // Set data inside the Buy NFT function if the transaction is sucesfull using the UseState for each item that will be update
  // such as game coins left and item purchase state --> can purchase only one item
  const BuyNFTs = async () => {
    const userDetails = {
      userAccount: localStorage.getItem(1),
      userLevel: playerLevel,
      userGameCoins: gameCoins,
      category: category,
      itemID: itemID,
    };
    await axios
      .post("https://plearn-backend.onrender.com/buyFromMarketplace", userDetails)
      // .post(`http://localhost:8080/buyFromMarketplace`, userDetails)
      .then((response) => {
        setSuccessMessage(response.data.message);
        console.log(response.data);
        setGameCoins(response.data.userGameCoins);
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
                    <img
                      src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-list15-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="imgGrid">
                    <div className="img1">
                      <img
                        src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-single-17-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="img1">
                      <img
                        src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-single-17-img-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="img1">
                      <img
                        src="https://artorias.qodeinteractive.com/wp-content/uploads/2022/10/product-single-17-img-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <span>Player Level: {playerLevel}</span>
              <span>Gamecoins: {gameCoins}</span>
              <h1 className="name">{itemName}</h1>
              <span className="price">Cost: {cost}</span>
              <span className="price">Unlock level: {unlockLevel}</span>
              <div className="description">
                <p className="desc">{description}</p>
              </div>
              <div className="Categor">
                <h2>Category :</h2>
                <span className="ca">{category}</span>
              </div>
              <div className="buyNow">
                {/* {level}; */}
                <button onClick={BuyNFTs}>
                  <span>Buy Now!</span>
                </button>
              </div>
              <div>{successMessage}</div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
});
const Container = styled.div`
  background: black;
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
    grid-gap: 4%;
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
  img {
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
    font-size: 27px;
    line-height: 1.03704em;
    font-weight: 400;
    letter-spacing: normal;
    margin-top: 13px;
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
  .buyNow {
    margin-top: 10px;
    button {
      padding: 0.1em 0.25em;
      width: 13em;
      height: 4.2em;
      background-color: #212121;
      border: 0.08em solid #fff;
      border-radius: 0.3em;
      font-size: 12px;
    }

    button span {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 0.4em;
      width: 8.25em;
      height: 2.5em;
      background-color: #212121;
      border-radius: 0.2em;
      font-size: 1.5em;
      color: #fff;
      border: 0.08em solid #fff;
      box-shadow: 0 0.4em 0.1em 0.019em #fff;
    }

    button span:hover {
      transition: all 0.5s;
      transform: translate(0, 0.4em);
      box-shadow: 0 0 0 0 #fff;
    }

    button span:not(hover) {
      transition: all 1s;
    }
  }
`;
