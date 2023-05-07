import "./App.css";
import React, { lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import WalletContext from "./contexts/WalletContext";
import Animate from "./components/Routes/Animate";

export default React.memo(function App() {
  const [userAccount, setUserAccount] = useState(null);
  useEffect(() => {
    if (localStorage.length !== 0) {
      setUserAccount(localStorage.getItem("1"));
    }
  }, [localStorage.length !== 0]);
  // const handleUserAccountChange = (newUserAccount) => {
  //   setUserAccount(newUserAccount);
  // };

  // const Name = useSelector((state) => state.Blog.Name);

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
