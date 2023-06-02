import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import "./CharacterCardList.css";

const CharacterCardList = ({ list }) => {
  return (
    <div className="list">
      {list.map(function (element, i) {
        return <CharacterCard character={element} key={i} />;
      })}
    </div>
  );
};

CharacterCardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default CharacterCardList;
