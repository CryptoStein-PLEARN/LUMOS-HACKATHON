import React, { useEffect, useState } from "react";
import CardLoader from "../components/CardLoader";
import Header from "../components/MarketPlace/Header";
import SortingTab from "../components/SortingTab";
import Cards from "../components/MarketPlace/Cards";
import { useSelector } from "react-redux";
import Category from "../components/MarketPlace/Category";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default React.memo(function MarketPlace() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 500);
  }, [location]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get('https://plearn-backend.onrender.com/getCharacterDetails');
        const charactersWithCategory = response.data.map(item => ({
          ...item,
          category: "Characters"
        }));
        setCharacters(charactersWithCategory);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchCharacters();
  }, []);

  const charactersByCategory = characters.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {});

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
  {Object.entries(charactersByCategory).map(([categoryName, categoryCards]) => (
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
