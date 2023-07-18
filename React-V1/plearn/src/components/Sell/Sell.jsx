import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bg from "../../assets/sell.jpg";
import styled from "styled-components";
export default function Sell() {
  const item = useParams();

  const [itemName, category, id] = item.itemName.split("_");
  const nav = useNavigate();
  const [Loader, setLoader] = useState(false);
  const StartAuction = async () => {
    setLoader(true);
    const daysInput = document.getElementById("durationDays");
    const hoursInput = document.getElementById("durationHours");
    const minutesInput = document.getElementById("durationMinutes");

    // Convert the values to numbers
    const days = parseInt(daysInput.value, 10) || 0;
    const hours = parseInt(hoursInput.value, 10) || 0;
    const minutes = parseInt(minutesInput.value, 10) || 0;

    // Calculate the total duration in milliseconds
    const totalDuration = ((days * 24 + hours) * 60 + minutes) * 60 * 1000;

    const data = {
      category: category,
      id: id,
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

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: `url(${bg})`,
        height: "101vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="box">
        <div className="wrap">
          <h1>Start an Auction</h1>
          <h3>Product Name : {itemName}</h3>
          <h3>Category : Characters</h3>
        </div>
        <p>Enter Your Base Price</p>

        <input
          id="basePrice"
          type="number"
          min="0"
          placeholder="Sell At"
          onInput={(event) =>
            (event.target.value = event.target.value.slice(
              0,
              event.target.maxLength
            ))
          }
          maxLength="4"
        ></input>
        <p>Enter minimum bid amount allowed</p>
        <input
          id="minBidAmount"
          type="number"
          min="0"
          placeholder="Minimum bid amount"
          onInput={(event) =>
            (event.target.value = event.target.value.slice(
              0,
              event.target.maxLength
            ))
          }
          maxLength="4"
        ></input>
        <p> Duration of the Auction </p>
        <input type="number" id="durationDays" placeholder="Days" min="0" />
        <input
          type="number"
          id="durationHours"
          placeholder="Hours"
          min="0"
          max="23"
        />
        <input
          type="number"
          id="durationMinutes"
          placeholder="Minutes"
          min="0"
          max="59"
        />

        <Button>
          <button disabled={Loader ? true : false} onClick={StartAuction}>
            <span> Submit</span>
          </button>
        </Button>
      </div>
    </div>
  );
}
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
