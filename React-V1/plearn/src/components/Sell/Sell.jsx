import bg from "../../assets/sell.jpg";
import styled from "styled-components";
export default function Sell() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: `url(${bg})`,
        height: "101vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
