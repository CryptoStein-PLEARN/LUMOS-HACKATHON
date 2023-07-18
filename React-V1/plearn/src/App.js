import "./App.css";
import React, { lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import WalletContext from "./contexts/WalletContext";
import Animate from "./components/Routes/Animate";
import axios from "axios";
import { updateCards } from "./Store/Slice/userSlice";
import { useDispatch } from "react-redux";
import { SetOwned } from "./Store/Slice/Owned";

export default React.memo(function App() {
  const [userAccount, setUserAccount] = useState(null);
  const [OwnedData, setOwnedData] = useState({});
  useEffect(() => {
    if (localStorage.length !== 0) {
      setUserAccount(localStorage.getItem("1"));
    }
  }, [localStorage.length !== 0]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchDataFromMarketplace() {
      try {
        const response = await axios.get(
          "https://plearn-backend.onrender.com/getMarketplaceDetails"
          // "http://localhost:8080/getMarketplaceDetails"
        );
        console.log(response.data);

        response.data.forEach((category) => {
          category.details.forEach(async (item) => {
            if(item.inAuction === true)
            {
              const res = await axios.get(`https://plearn-backend.onrender.com/getAuctionDetails/${category.category}/${item.id}`);
              // const res = await axios.get(`http://localhost:8080/getAuctionDetails/${category.category}/${item.id}`);
              console.log(res.data);
              
            }

            else if(item.forSale === true)
            {
              const res = await axios.get(`https://plearn-backend.onrender.com/getSaleDetails/${category.category}/${item.id}`);
              // const res = await axios.get(`http://localhost:8080/getSaleDetails/${category.category}/${item.id}`);
              console.log(res.data);
            }
          })
        })

        dispatch(updateCards(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataFromMarketplace();
  }, []);

  useEffect(() => {
    async function fetchOwnedNFTs() {
      try {
        const response = await axios.get(
          `https://plearn-backend.onrender.com/getOwnedNFTs/${localStorage.getItem(
            1
          )}`
        );
        dispatch(SetOwned(response.data));
        // const response = await axios.get(`http://localhost:8080/getOwnedNFTs/${localStorage.getItem(1)}`)
        // const ownedNFTs = response.data;
      } catch (error) {
        console.log(error);
      }
    }

    fetchOwnedNFTs();
  }, []);

  return (
    <>
      <WalletContext.Provider value={{ userAccount, setUserAccount }}>
        <BrowserRouter>
          <Nav />
          <Animate />
        </BrowserRouter>
      </WalletContext.Provider>
    </>
  );
});
