import React, { Component } from "react";

import "./card.styles.scss";

class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <img src={data.countryInfo.flag} alt="country-flag" />
        </div>
        <div className="card-body">
          <h2 className="country">{data.country}</h2>
          <div className="info-grid">
            <span>Cases : {data.cases}</span>
            <span>Deaths : {data.deaths}</span>
            <span>Recovered : {data.recovered}</span>
            <span>Today's Cases : {data.todayCases}</span>
            <span>Today's Deaths : {data.todayDeaths}</span>
            <span>Active : {data.active}</span>
            <span>Critical : {data.critical}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
