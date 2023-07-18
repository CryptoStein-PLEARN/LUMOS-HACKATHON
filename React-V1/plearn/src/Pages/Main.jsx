import GameSection from "../components/GameSection";
import Header from "../components/Header";
import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import BreadCrums from "../components/BreadCrums";
// import Litepaper from "../components/Litepaper";
// import Hype from "./components/Hype";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
// import Gamedes from "./components/Gamedes";
const ShowCase = lazy(() => import("../components/ShowCase"));
const Toke = lazy(() => import("../components/toke"));
const Faq = lazy(() => import("../components/Faq"));
const Footer = lazy(() => import("../components/Footer"));

export default React.memo(function Main() {
  return (
    <>
      <div>
        <Suspense fallback={<Loader></Loader>}>
          <div className="vidbg">
            <Header />
            <div>
              <TawkMessengerReact propertyId="property_id" widgetId="default" />
            </div>
            <GameSection />
            <BreadCrums />
            <ShowCase style={{ marginTop: "10vw" }} />
            <Toke />
            <Faq />
          </div>
          <Footer />
        </Suspense>
      </div>
    </>
  );
});
