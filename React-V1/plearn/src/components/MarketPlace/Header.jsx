import React from "react";
import styled from "styled-components";
import HeaderPfp from "./HeaderPfp";
import homeBg from "../../assets/MarketPlace/COVER-17.jpg";
export default React.memo(function Header() {
  
  return (
    <Container className="p-5" style={{ background: `url(${homeBg})` }}>
      <div className="w-full  rounded-md bg-center bg-cover flex flex-col justify-center px-4">
        <h1 className="mb-4 display-5">
          Welcome to <br /> Plearns' Marketplace - <br /> ready to help you find
          your right match.{" "}
          <p className="mt-4 h-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione.
          </p>
        </h1>
      </div>
      <HeaderPfp />
    </Container>
  );
});
const Container = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  h1 {
    width: 90%;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    margin: 25px 0;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
  }
  .w-full {
    height: 100%;
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border-radius: 0.375rem;
  }
`;
