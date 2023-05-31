import React, { useEffect, useState } from "react";
import CardLoader from "../components/CardLoader";
import Header from "../components/MarketPlace/Header";
import SortingTab from "../components/SortingTab";
import Cards from "../components/MarketPlace/Cards";
import { useSelector } from "react-redux";
import Category from "../components/MarketPlace/Category";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";

export default React.memo(function MarketPlace() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 500);
  }, [location]);

  const filterActive = useSelector((state) => state.tools.filterActive);
  const card = useSelector((state) => state.tools.cards);
  const filteredCards = useSelector((state) => state.tools.filteredCards);
  const cardData = filterActive ? filteredCards : card;
  const [ShopState, SetShop] = useState(true);
  const Root = React.memo(() => {
    return (
      <>
        <div className="left">
          {Object.entries(card).map(([category, { details }]) => (
            <div className="Mainfold" key={category}>
              <div className="Head">
                <h1>{card[category].category}</h1>
                <div
                  className="span"
                  onClick={() => {
                    SetShop(false);
                  }}
                >
                  View all
                </div>
              </div>
              <CardLoader data={details} cat={card[category].category} />
            </div>
          ))}
        </div>
      </>
    );
  });

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="MainFs">
          <Header />
          <SortingTab ShopState={ShopState} />
          <div className="Markt">
            <div className="left">
              {ShopState === false ? (
                <>
                  <Category />
                  <div className="shopAll">
                    {Object.entries(cardData).map(([category, { details }]) =>
                      details.map((ds) => <Cards data={ds} />)
                    )}
                  </div>
                </>
              ) : (
                <Root />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});
