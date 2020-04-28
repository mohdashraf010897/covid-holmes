import React from "react";

import Card from "./../card/card.component";

import "./card-container.styles.scss";

const CardContainer = ({ countriesData }) => {
  return (
    <div className="cardContainer">
      {countriesData.map((data, i) => (
        <Card key={i} data={data} />
      ))}
    </div>
  );
};

export default CardContainer;
