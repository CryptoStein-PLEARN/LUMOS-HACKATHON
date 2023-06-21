import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function Sell() {
  const { itemName } = useParams();
  
  const StartAuction = async () => {
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
      category: "characters",
      id: 7,
      duration: totalDuration,
      basePrice: 100,
      currentOwner: localStorage.getItem(1)
    }

    // await axios.post("http://localhost:8080/startAuction", data)
    await axios.post("https://plearn-backend.onrender.com/startAuction", data)
    .then((response) => {
      console.log(response.data);
    })    
  }

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2vh",
        height: "70vh",
      }}
    >
      <div className="box">
        <h1>Sell your Item</h1>
        <h3>Product Name : {itemName}</h3>
        <p>Enter Your Base Price</p>
        <input
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
        <p> Duration of the Auction </p>
        <input type="number" id="durationDays" placeholder="Days" min="0"/>
        <input type="number" id="durationHours" placeholder="Hours" min="0" max="23"/>
        <input type="number" id="durationMinutes" placeholder="Minutes" min="0" max="59"/>
        <p>Category : Characters</p>
        <button onClick={StartAuction}>Submit</button>
      </div>
    </div>
  );
}
