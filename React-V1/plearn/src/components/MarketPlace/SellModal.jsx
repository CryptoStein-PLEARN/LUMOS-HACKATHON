import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
function SellModal({ itemID, isFixed, isOpen, handleOpen, handleFixed }) {
  const item = useLocation();

  const { pathname } = item;

  // Split the pathname by '/' to get the parts of the URL
  const urlParts = pathname.split("/");

  const category = urlParts[2];

  // Assuming the name is at index 3 in the URL parts
  const itemName = urlParts[3];

  const nav = useNavigate();
  const [Loader, setLoader] = useState(false);
  const StartAuction = async () => {
    setLoader(true);
    const daysInput = document.getElementById("durationDays");
    // const hoursInput = document.getElementById("durationHours");
    // const minutesInput = document.getElementById("durationMinutes");

    // Convert the values to numbers
    const days = parseInt(daysInput.value, 10) || 0;
    // const hours = parseInt(hoursInput.value, 10) || 0;
    // const minutes = parseInt(minutesInput.value, 10) || 0;

    // Calculate the total duration in milliseconds
    const totalDuration = days * 24 * 60 * 60 * 1000;

    const data = {
      category: category,
      id: itemID,
      duration: totalDuration,
      basePrice: document.getElementById("basePrice").value,
      minBidAmount: document.getElementById("minBidAmount").value,
      currentOwner: localStorage.getItem(1),
    };

    // await axios.post("http://localhost:8080/startAuction", data)
    await axios
      .post("https://plearn-backend.onrender.com/startAuction", data)
      // .post("http://localhost:8080/startAuction", data)
      .then((response) => {
        setLoader(false);
        console.log(response.data);
        nav("/MarketPlace");
        window.location.reload();
      });
  };

  const StartSale = async () => {
    const data = {
      category: category,
      id: itemID,
      cost: document.getElementById("sellingBasePrice").value,
    };

    await axios
      .post("https://plearn-backend.onrender.com/startSale", data)
      // .post("http://localhost:8080/startSale", data)
      .then((response) => {
        setLoader(false);
        console.log(response.data);
        nav("/MarketPlace");
        window.location.reload();
      });
  };
  if (!isOpen) {
    return <></>;
  }
  return (
    <Container>
      <div className="box">
        <div className="wrap">
          <div className="wraplex">
            {isFixed ? <h1>
              Sell  At fixed Price

            </h1>
              : <h1>
                Start an Auction
              </h1>}
            <List className="menu-bar">
              <ListItem
                className={`tab-button ${isFixed ? "active" : ""}`}
                onClick={() => {
                  handleFixed();
                }}
              >
                Auction
              </ListItem>
              <ListItem
                className={`tab-button ${isFixed ? "" : "active"}`}
                onClick={() => {
                  handleFixed();
                }}
              >
                Sell
              </ListItem>
            </List>
            <IoIosClose
              color="white"
              size={"34"}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleOpen();
              }}
            />
          </div>
          <h3 style={{ fontSize: "14px" }}>Product Name : {itemName}</h3>
          <h3 style={{ fontSize: "14px" }}>Category : {category}</h3>
        </div>
        {isFixed ? (
          <>
            <input
              type="number"
              id="sellingBasePrice"
              placeholder="Sell At"
              onInput={(event) =>
              (event.target.value = event.target.value.slice(
                0,
                event.target.maxLength
              ))
              }
              maxLength="4"
            />
            <Button>
              <button onClick={StartSale}>Sell Fixed</button>
            </Button>
          </>
        ) : (
          <>

            <input
              id="basePrice"
              type="number"
              min="0"
              placeholder="Enter Your Base Price"
              onInput={(event) =>
              (event.target.value = event.target.value.slice(
                0,
                event.target.maxLength
              ))
              }
              maxLength="4"
            ></input>

            <input
              id="minBidAmount"
              type="number"
              min="0"
              placeholder="Enter minimum bid amount allowed"
              onInput={(event) =>
              (event.target.value = event.target.value.slice(
                0,
                event.target.maxLength
              ))
              }
              maxLength="4"
            ></input>
            <input type="number" id="durationDays" placeholder="Duration of the Auction " min="1" />
            <Button>
              <button disabled={Loader ? true : false} onClick={StartAuction}>
                <span> Submit</span>
              </button>
            </Button>
          </>
        )}


      </div>
    </Container>
  );
}

export default SellModal;
const Button = styled.div`
  button {
    display: inline-block;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #03045e;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in;
    z-index: 1;
  }

  button::before,
  button::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }

  button::before {
    left: -10px;
    background: #240046;
  }

  button::after {
    right: -10px;
    background: #5a189a;
  }

  button:hover::before,
  button:hover::after {
    width: 58%;
  }

  button:hover span {
    color: #e0aaff;
    transition: 0.3s;
  }

  button span {
    color: #03045e;
    font-size: 18px;
    transition: all 0.3s ease-in;
  }
`;
const Container = styled.div`
  position: absolute;
  left: 40vw;.tab-button { 
    font-size: 16px;
    border: none;
    background-color: #f2f2f2;
    color: #333;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
  }
  .tab-button {
    padding: 10px 30px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;  
  }
  
  .tab-button.active {
    transform: translateX(15px); 
    opacity: 0.4;     
  }
  top: 34vh;
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    svg{
      transform: translate(15px,-20px);
    }
    
    h1 {
      font-size: 30px !important;
      cursor: pointer;
      letter-spacing: 0.12em;
      max-width: 45%;
      margin:0px;
    }
    h3 {
      margin: 0px !important;
    }
    .wraplex {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
  input{
  --input-focus: #2d8cf0;
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: rgb(255,255,255,0.9);
  --main-color: #323232;
  width: 70%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

input:focus {
  border: 2px solid var(--input-focus);
}
`;

const List = styled.ul`
  display: flex;
  gap: 20px; 
  list-style: none;
  justify-content:center;
  width:40vh;
  border-radius: 25px; 
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 10px 10px;

`;

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  color: white;
  font-family: sans-serif; 
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px;
  position: relative;
  cursor: pointer; 
  
`;