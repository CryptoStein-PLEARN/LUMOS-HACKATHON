import React, { useState, useEffect, useMemo, useContext } from "react";
import logo_plearn from "../assets/Logo.png";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import WalletContext from "../contexts/WalletContext";
import Navbtn from "./Navbtn";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  // const [userAccount, setUserAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [isLoading, setIsLoading] = useState(false);
  const { userAccount, setUserAccount } = useContext(WalletContext);
  const [ playerLevel, setPlayerLevel ] = useState(1);
  const nav = useNavigate();

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      alert("Please install MetaMask extension.");
    }
  };
  const nav_list = [
    { name: "Home" },
    { name: "About" },
    { name: "MarketPlace" },
    { name: "Owned" },
    { name: "Tokenomics" },
    // { name: "Trading" },
    // { name: "NFT" },
  ];

  const Navcomp = () => {
    const listItems = useMemo(() => {
      return nav_list.map((item) => {
        const path = item.name.replace(/\s+/g, "");
        return (
          <li className="nav-item" key={item.name}>
            <div
              className="nav-link active"
              onClick={() => {
                nav(`/${item.name === "Home" ? "" : path.toLowerCase()}`);
              }}
            >
              {item.name}
            </div>
          </li>
        );
      });
    }, []);
    return <ul className="navbar-nav mb-2 mb-lg-0 me-auto">{listItems}</ul>;
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setUserAccount(newAccount[0]);
    // onUserAccountChange(newAccount[0]); // Callback function - Passing the value to the parent component which is App.js
  };

  useEffect(() => {
    if (userAccount != null) {
      setIsLoading(true);
      axios
        .post("https://plearn-backend.onrender.com/", { userAccount })
        // .post("http://localhost:8080/", {userAccount})
        .then((res) => {
          setConnButtonText("Wallet Connected");
          localStorage.setItem("1", userAccount);
          const resp = res.data.message;
          setPlayerLevel(res.data.playerLevel)

          alert(localStorage.length !== 0 ? "You're Logged in!" : resp);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          alert("An error occurred, please try again later.");
        });
    } else {
      setConnButtonText("Connect Wallet");
    }
  }, [userAccount]);

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  if (typeof window.ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", accountChangedHandler);
    window.ethereum.on("chainChanged", chainChangedHandler);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-black navbar-dark shadow-5-strong ">
        <div className="container-fluid">
          <div className="logo-thumbnail navbar-brand logo-custom-css">
            {" "}
            <img
              src={logo_plearn}
              onClick={() => {
                nav("/");
              }}
              alt="Bootstrap"
            />
          </div>
          <button
            type="button"
            className="navbar-toggler wltBtn"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Navcomp />
            <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
              <li className="nav-item "></li>
            </ul>
            <div className="flx ">
              <Navbtn />
              <div>
                Player level: {playerLevel}
              </div>
              <div
                className="nav-link btn  px-3 py-2  wltBtn"
                onClick={connectWalletHandler}
              >
                {connButtonText}
                {isLoading ? (
                  <span>
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperclassName="blocks-wrapper"
                      colors={[
                        "purple",
                        "purple",
                        "purple",
                        "purple",
                        "purple",
                      ]}
                    />
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
