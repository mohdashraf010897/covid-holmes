import React from "react";
import CardSmall from "./../card-small/card-small.component";

import "./card-small-container.styles.scss";

const CardSmallContainer = ({ latestData, lastUpdated }) => {
  return (
    <div className="cardSmallContainer">
      <CardSmall
        bgColor="grey"
        id="cases"
        data={latestData.cases}
        lastUpdated={lastUpdated}
      />
      <CardSmall
        bgColor="red"
        id="deaths"
        data={latestData.deaths}
        lastUpdated={lastUpdated}
      />
      <CardSmall
        bgColor="green"
        id="recovered"
        data={latestData.recovered}
        lastUpdated={lastUpdated}
      />
    </div>
  );
};

export default CardSmallContainer;
