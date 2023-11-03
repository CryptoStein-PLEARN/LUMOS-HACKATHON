import React from "react";
import boxicon from "../assets/Images/icon-box.svg";
import WalletContext from "../contexts/WalletContext";
import { useContext } from "react";
import Lottie from "lottie-react";
import Kitty from "../assets/Gamer.json";
export default function Header() {
  const { userAccount } = useContext(WalletContext);

  //0x0000000000000000000000000000000000000000 demo acc
  const startGame = async () => {
    if (userAccount == null) {
      alert("Please connect MetaMask wallet in order to start the game.");
    } else {
      window.open(
        `https://singular-granita-0e1259.netlify.app?userAccount=${userAccount}`
      );
    }
  };

  return (
    <section className="hero hero2">
      <div className="container container--relative">
        <div className="hero__blocks">
          <div className="hero__intro">
            <div>
              <h1 className="hero__intro-title animated-box mb--20">
                <div className="block-title-inline">
                  <img src={boxicon} alt="NFT promo" className="image" />
                  <h4 className="">
                    Play <span className="text-warning">|</span> Learn{" "}
                    <span className="text-warning">|</span>
                    Earn
                  </h4>
                </div>
                <span className="gradColor display-4">PLEARN</span>
              </h1>
              <p className="lead fs-6 fw-light">
                Welcome to PLEARN, the virtual board game that combines
                education with entertainment. It provides a fun and interactive
                way to learn financial literacy and make smart investments.
              </p>
              <p className="lead fs-6 fw-light">
                Invest, buy, sell real estate, and own unique NFTs as you play
                your way through the game.
              </p>
            </div>

            <div className="hero__intro-cta animated-box ms-3">
              <button className="btnply" onClick={startGame}>
                Play Now{" "}
                <div id="clip">
                  <div id="leftTop" className="corner"></div>
                  <div id="rightBottom" className="corner"></div>
                  <div id="rightTop" className="corner"></div>
                  <div id="leftBottom" className="corner"></div>
                </div>
                <span id="rightArrow" className="arrow"></span>
                <span id="leftArrow" className="arrow"></span>
              </button>
            </div>
          </div>
          <div className="hero__nft-placeholder-img">
            <Lottie className="mb-24" animationData={Kitty} />
          </div>
        </div>
      </div>
    </section>
  );
}
