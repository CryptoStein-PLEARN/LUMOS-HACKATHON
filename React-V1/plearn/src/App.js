import "./App.css";
import React, { lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import WalletContext from "./contexts/WalletContext";
import Animate from "./components/Routes/Animate";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default React.memo(function App() {
  const [userAccount, setUserAccount] = useState(null);
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
          // "https://plearn-backend.onrender.com/getMarketplaceDetails"
          "http://localhost:8080/getMarketplaceDetails"
        );
        const charactersWithCategory = response.data;
        console.log(response.data);
        // dispatch(updateCards(charactersWithCategory));
      } catch (error) {
        console.log(error);
      }
    }

    fetchDataFromMarketplace();
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
