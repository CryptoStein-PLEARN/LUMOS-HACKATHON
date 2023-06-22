import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Main from "./Pages/Main";
import Thankyou from "./Components/Thankyou";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Policy" element={<PrivacyPolicy />}></Route>

          <Route path="/Thankyou" element={<Thankyou />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
