import React from "react";
import a1 from "../assets/Images/NFTS/nft (32).jpg";
import a2 from "../assets/Images/NFTS/nft (33).jpg";
import a3 from "../assets/Images/NFTS/nft (34).jpg";
import a4 from "../assets/Images/NFTS/nft (35).jpg";

export default function ShowCase() {
  const eth =
    "https://nftly-theme.pxsquad.com/demo1/wp-content/themes/nftly/assets/images/crypto/ETH.png";
  const items = [
    {
      id: 1,
      name: "CASA BLANCA",
      imageSrc: a1,
      eth: "4,322",
    },
    {
      id: 2,
      name: "TAJ MAHAL",
      imageSrc: a2,
      eth: "1,502",
    },
    {
      id: 3,
      name: "ORANGE OASIS",
      imageSrc: a3,
      eth: "1,423",
    },
    {
      id: 4,
      name: "BEIGE BAY",
      imageSrc: a4,
      eth: "1,445",
    },
  ];

  return (
    <div>
      <section className="section-item  pb-20">
        <div className="container">
          <div className="section__head mts">
            <h2 className="section__header-title">
              The best NFT’s at your glance, explore more than 1000k colections
              right away{" "}
            </h2>
            <div class="body">
              <button class="btn btn-hover">
                <span class="btn-text">Shop Now!</span>
              </button>
            </div>
          </div>
          <div className="section__content">
            <div className="marketplace__items">
              {items.map((item) => (
                <div className="marketplace__item" key={item.id}>
                  <div className="marketplace__image">
                    <img
                      width="378"
                      height="390"
                      src={item.imageSrc}
                      className="imgT"
                      alt=""
                    />
                  </div>
                  <div className="marketplace__meta">
                    <div className="marketplace__meta-item">
                      <div className="marketplace__meta-author">
                        <h3 className="marketplace__meta-title">
                          <a href="index.html" className="">
                            {item.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="marketplace_go-to">
                    <div className="marketplace__favs">
                      <div className="marketplace__additional-first">
                        <img src={eth} alt="marketplace-icon" />
                        <div>{item.eth} ETH</div>
                      </div>
                    </div>
                    <div className="marketplace__additional">
                      <div>
                        <a className="btn btn--hypercolor" href="index.html">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>BUY NFT{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
