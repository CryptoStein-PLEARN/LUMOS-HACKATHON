import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterCards, setSortBy } from "../../Store/Slice/userSlice";
import Swiper, { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
export default function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => {
    const allCategories = state.tools.cards.map((card) => card.Category);
    return ["All", ...new Set(allCategories)];
  });
  const handleSort = (event) => {
    dispatch(setSortBy(event.target.value));
  };
  const handleFilterClick = (category) => {
    dispatch(filterCards(category));
  };
  return (
    <div>
      <Cat className="categories">
        {categories.map((category) => (
          <button key={category} onClick={() => handleFilterClick(category)}>
            {category}
          </button>
        ))}
      </Cat>
    </div>
  );
}
const Sort = styled.div``;
const Cat = styled.div`
  display: flex;
  display: flex;
  max-width: 40vw;
  margin-top: 40px;
  justify-content: space-evenly;
  button {
    background: #fbca1f;
    font-family: inherit;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
  }

  button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }
`;
