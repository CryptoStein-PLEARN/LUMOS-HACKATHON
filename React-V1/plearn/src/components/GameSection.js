import React, { useState } from "react";
import Kitty from "../assets/Header.json";

import Lottie from "lottie-react";
export default function GameSection() {
  return (
    <div className="pt">
      <div className="container-flex" >
        <div className="hero__blocks">
          <Lottie animationData={Kitty} />
        </div>
        <div className="hero_title">
          <div className="flex">
            <h1 className="hero__intro-title  ">
              Discover, Play and Sell Extraordinary NFTs & Virtual Properties
            </h1>

            <p>
              The game has various NFTs that can be purchased,long with things
              like customizable dice, different game boards, and other settings
              with different rules.
            </p>
          </div>

          <div className="hero__intro-stats">
            <div className="hero__intro-stats-item animated-box mss">
              <div className="hero__intro-stats-spacer"></div>
              <div>
                <div className="hero__intro-stats-number">
                  <span className="text-span">PLAY</span>
                </div>
              </div>
            </div>
            <div className="hero__intro-stats-item animated-box mss">
              <div className="hero__intro-stats-spacer"></div>
              <div>
                <div className="hero__intro-stats-number">LEARN </div>
              </div>
            </div>
            <div className="hero__intro-stats-item animated-box mss">
              <div className="hero__intro-stats-spacer"></div>
              <div>
                <div className="hero__intro-stats-number">EARN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
