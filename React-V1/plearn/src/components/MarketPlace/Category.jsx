import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterCards } from "../../Store/Slice/userSlice";
export default React.memo(function Category() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tools.cards);
  const categories = data;
  const currentFilter = useSelector((state) => state.tools.currentFilter);
  const handleCategoryClick = (category) => {
    const isSameFilter = category === currentFilter;
    dispatch(filterCards({ filter: category, isSameFilter }));
  };
  return (
    <div>
      <Cat className="categories">
        {Object.entries(categories).map(([category, { details }]) => (
          <button
            key={categories[category].category}
            onClick={() => handleCategoryClick(categories[category].category)}
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
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  gap: 30px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  justify-content: flex-start;
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
