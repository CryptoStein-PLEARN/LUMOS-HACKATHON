import React from "react";
import boxicon from "../assets/Images/icon-box.svg";
import WalletContext from "../contexts/WalletContext";
import { useContext } from "react";
import Lottie from "lottie-react";
import Kitty from "../assets/wallet.json";
export default function Header() {
  const { userAccount } = useContext(WalletContext);
  const startGame = async () => {
    if (userAccount == null) {
      alert("Please connect MetaMask wallet in order to start the game.");
    } else {
      // window.open(`http://127.0.0.1:5500/index.html?userAccount=${userAccount}`); // Opening the game, sending userAccount.

      window.open(
        `https://singular-granita-0e1259.netlify.app?userAccount=${userAccount}`
      );
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="container container--relative">
          <div className="hero__blocks">
            <div className="hero__intro">
              <div className="block-title-inline mss">
                <img src={boxicon} alt="NFT promo" className="image" />
                <h4>Play Learn Earn</h4>
              </div>

              <h1 className="hero__intro-title animated-box mss mt--45 mb--20">
                PLEARN
              </h1>
              <p>
                Welcome to PLEARN, the virtual board game that combines
                education with entertainment! PLEARN provides a fun and
                interactive way to learn financial literacy and make smart
                investments.
              </p>
              <p>
                Invest, buy, sell real estate, and own unique NFTs as you play
                your way through the game. Put your problem-solving skills to
                the test and make the best decisions to earn a higher income.
                With progressively increasing difficulty levels, you'll learn
                more as you advance.
              </p>
              <p>
                From customizable dice and game boards to different rules and
                settings, PLEARN offers endless possibilities. Join the fun and
                become a financial literacy expert today!
              </p>

              <div className="hero__intro-cta animated-box mss">
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

              {/* <div className="hero__intro-stats">
                <div className="hero__intro-stats-item animated-box mss">
                  <div className="hero__intro-stats-spacer"></div>
                  <div>
                    <div className="hero__intro-stats-number">
                      <span className="text-span">$</span>
                      234{" "}
                    </div>
                    <div className="hero__intro-stats-text">
                      Trading volume{" "}
                    </div>
                  </div>
                </div>
                <div className="hero__intro-stats-item animated-box mss">
                  <div className="hero__intro-stats-spacer"></div>
                  <div>
                    <div className="hero__intro-stats-number">63k </div>
                    <div className="hero__intro-stats-text">
                      Virtual Properties{" "}
                    </div>
                  </div>
                </div>
                <div className="hero__intro-stats-item animated-box mss">
                  <div className="hero__intro-stats-spacer"></div>
                  <div>
                    <div className="hero__intro-stats-number">1.2m </div>
                    <div className="hero__intro-stats-text">
                      Active Players{" "}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="hero__nft-placeholder">
              <div className="hero__nft-placeholder-img">
                <Lottie animationData={Kitty}  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
