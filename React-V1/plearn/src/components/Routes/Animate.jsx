import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MarketPlace from "../../Pages/MarketPlace";
import AuctionPlace from "../../components/MarketPlace/Buy";
import data from "../../utils/data";
import Owned from "../../Pages/Owned";
import PrivacyPolicy from "../../Pages/PrivacyPolicy";
import Error from "../../Pages/404";
import Main from "../../Pages/Main";
export default function Animate() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path={"/"} element={<Main />} />
      <Route path="*" element={<Error />} />
      {data.map((item) => (
        <Route
          key={item.id}
          exact
          path={`/Buy/${item.Name}`}
          element={<AuctionPlace />}
        />
      ))}
      <Route exact path="/marketplace" element={<MarketPlace />}></Route>
      <Route exact path="/owned" element={<Owned />}></Route>
      <Route exact path="/policy" element={<PrivacyPolicy />}></Route>
    </Routes>
  );
}
