import React, { Component } from "react";

import "./card-small.styles.scss";

class CardSmall extends Component {
  render() {
    const { bgColor, data, id, lastUpdated } = this.props;
    return (
      <div className={`${bgColor} card-small`}>
        <div className="card-small-header">
          <span>{id.toUpperCase()}</span>
          <span>{data}</span>
        </div>
        <div className="card-small-footer">
          <span>Last Updated : {lastUpdated}</span>
        </div>
      </div>
    );
  }
}

export default CardSmall;
