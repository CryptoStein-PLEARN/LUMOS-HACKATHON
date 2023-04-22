import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Main from "./Pages/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Policy" element={<PrivacyPolicy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
