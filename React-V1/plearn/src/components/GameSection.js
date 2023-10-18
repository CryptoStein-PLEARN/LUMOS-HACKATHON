import React, { useState } from "react";
import Kitty from "../assets/Gamer.json";

import Lottie from "lottie-react";
export default function GameSection() {
  return (
    <div className="pt">
      <section className="hero wf-section ">
        <div className="container container--relative">
          <div className="hero__blocks flxend">
            <div className="hero__nft-placeholder">
              <div className="hero__nft-placeholder-img lft">
                <div className="section__content">
                  <Lottie animationData={Kitty} />

                  {/* <div className="nft-showcase">
                    <div className="nft-showcase__col nft-showcase__col--sm nft-showcase__col--sm-first">
                      <div
                        className="nft-showcase__item nft-showcase__item--338 animated-box"
                        data-elapsed="140"
                      >
                        <img src={a1} alt="Summer Ape collection" />
                        <div className="nft-showcase__overlay">
                          <h3>Summer PinkPeak Collection</h3>
                          <a href="/">
                            BUY NOW!{" "}
                            <span className="icon-arrow icon-arrow--white"></span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="nft-showcase__item nft-showcase__item--338 animated-box"
                        data-elapsed="140"
                      >
                        <img src={a2} alt="The Scary Face 2022" />
                        <div className="nft-showcase__overlay">
                          <h3> DiceDash collection</h3>
                          <a href="/">
                            BUY NOW!
                            <span className="icon-arrow icon-arrow--white"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="nft-showcase__col nft-showcase__col--l">
                      <div
                        className="nft-showcase__item nft-showcase__item--473 animated-box"
                        data-elapsed="180"
                      >
                        <img
                          src={a5}
                          alt="Scared faces going crazy with a robotic touch and feel suited for youngsters"
                        />
                        <div className="nft-showcase__overlay">
                          <h3>
                            This virtual villa has stunning graphics and
                            intricate details, you'll feel as though you've
                            stepped into a completely different world
                          </h3>
                          <a href="/">
                            BUY NOW!{" "}
                            <span className="icon-arrow icon-arrow--white"></span>
                          </a>
                        </div>
                      </div>
                      <div className="nft-showcase__item nft-showcase__item--row nft-showcase__item--473 animated-box mt--20">
                        <div className="nft-showcase__item nft-showcase__item--220">
                          <img src={a4} alt="Wide character collection" />
                          <div className="nft-showcase__overlay">
                            <h3>IceRise collection</h3>
                            <a href="/">
                              BUY NOW!{" "}
                              <span className="icon-arrow icon-arrow--white"></span>
                            </a>
                          </div>
                        </div>
                        <div
                          className="nft-showcase__item nft-showcase__item--220 animated-box"
                          data-elapsed="180"
                        >
                          <img src={a7} alt="Melted faces collection" />
                          <div className="nft-showcase__overlay">
                            <h3>SneakerStride collection</h3>
                            <a href="/">
                              BUY NOW!{" "}
                              <span className="icon-arrow icon-arrow--white"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nft-showcase__col nft-showcase__col--sm nft-showcase__col--sm-third">
                      <div
                        className="nft-showcase__item nft-showcase__item--338 animated-box"
                        data-elapsed="200"
                      >
                        <img src={a9} alt="Summer bandanas going wild" />
                        <div className="nft-showcase__overlay">
                          <h3>
                            Crown designed for heroes who act like kings without
                            fear
                          </h3>
                          <a href="/">
                            BUY NOW!{" "}
                            <span className="icon-arrow icon-arrow--white"></span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="nft-showcase__item nft-showcase__item--338 animated-box"
                        data-elapsed="180"
                      >
                        <img src={a3} alt="The music techno beats NFTs" />
                        <div className="nft-showcase__overlay">
                          <h3>
                            {" "}
                            A new classic sports car with sleek lines and
                            powerful engine
                          </h3>
                          <a href="/">
                            BUY NOW!{" "}
                            <span className="icon-arrow icon-arrow--white"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="hero__intro">
              <h1 className="hero__intro-title animated-box mss mt--85 mb--40">
                Discover, Play and Sell Extraordinary NFTs & Virtual Properties
              </h1>
              {/* remove extra texts and make it view more */}
              <p>
                The player's goal is to gain knowledge, make the best decisions
                by choosing the best offers, and earn a higher income.
              </p>
              <p>
                The game has various NFTs that can be purchased,long with things
                like customizable dice, different game boards, and other
                settings with different rules.
              </p>

              <div className="hero__intro-stats mt--95">
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
      </section>
    </div>
  );
}
