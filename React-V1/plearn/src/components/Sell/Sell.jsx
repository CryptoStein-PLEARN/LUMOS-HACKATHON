import React from "react";
import { useParams } from "react-router-dom";

export default function Sell() {
  const { itemName } = useParams();

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
        <input type="date" />
        <p>Category : Characters</p>
        <button>Submit</button>
      </div>
    </div>
  );
}
