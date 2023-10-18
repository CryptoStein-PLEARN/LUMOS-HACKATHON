import React, { useEffect, useState } from "react";
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
  let card = useSelector((state) => state.tools.cards);
  const search = useSelector((state) => state.tools.currentSearch);
  const currentFilter = useSelector((state) => state.tools.currentFilter);
  if (currentFilter) {
    card = card.filter((item) => item.category === currentFilter);
  }
  if (search) {
  }
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="MainFs">
          <Header />
          <div className="Markt vidbg">
            <SortingTab />
            <div className="left">
              {!card ? (
                <>
                  please wait till the data is loaded
                  <p>Please make sure to connect your wallet to see the data</p>
                </>
              ) : (
                <>
                  <Category />
                  <div className="shopAll">
                    {search === "" ? (
                      Object.entries(card).map(([category, { details }]) =>
                        details.map((ds) => <Cards data={ds} />)
                      )
                    ) : (
                      <>
                        {Object.entries(card).map(([category, { details }]) =>
                          details
                            .filter(
                              (item) =>
                                search.toLowerCase() === "" ||
                                item.name
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                            )
                            .map((ds) => <Cards key={ds.id} data={ds} />)
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});
