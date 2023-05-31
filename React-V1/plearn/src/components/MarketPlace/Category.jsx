import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterCards } from "../../Store/Slice/userSlice";

export default React.memo(function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.tools.cards);
  const handleFilterClick = (category) => {
    dispatch(filterCards(category));
  };
  return (
    <div>
      <Cat className="categories">
        {Object.entries(categories).map(([category, { details }]) => (
          <button
            key={categories[category].category}
            onClick={() => handleFilterClick(categories[category].category)}
          >
            {categories[category].category}
          </button>
        ))}
      </Cat>
    </div>
  );
});
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
