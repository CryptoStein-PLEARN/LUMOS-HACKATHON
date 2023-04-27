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
    const cardsByCategory = card.reduce((accumulator, currentCard) => {
      const category = currentCard.Category;
      if (!accumulator[category]) {
        accumulator[category] = [];
      }
      accumulator[category].push(currentCard);
      return accumulator;
    }, {});

    return (
      <>
        <div className="left">
          {Object.entries(cardsByCategory).map(
            ([categoryName, categoryCards]) => (
              <div className="Mainfold" key={categoryName}>
                <div className="Head">
                  <h1>{categoryName}</h1>
                  <div
                    className="span"
                    onClick={() => {
                      SetShop(false);
                    }}
                  >
                    View all
                  </div>
                </div>
                <CardLoader data={categoryCards} />
              </div>
            )
          )}
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
                    {cardData.map((Category) => (
                      <Cards data={Category} />
                    ))}
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
