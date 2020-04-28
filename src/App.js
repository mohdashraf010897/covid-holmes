import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import CardSmallContainer from "./components/card-small-container/card-small-container";
import CardContainer from "./components/card-container/card-container";

import headerImage from "./assets/istockphoto-1211814545-170667a.jpg";

function App() {
  const [latestData, setLatest] = useState([""]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const date = new Date(parseInt(latestData.updated));
  const lastUpdated = date.toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });
  return (
    <div className="App">
      <div className="header-img">
        <img src={headerImage} alt="header-img" />
      </div>
      <CardSmallContainer latestData={latestData} lastUpdated={lastUpdated} />
      <input
        type="text"
        placeholder="Search a Country..."
        onChange={(e) => setSearchCountries(e.target.value)}
        className="search-bar"
      />
      <CardContainer
        countriesData={
          filterCountries.length > 0 || searchCountries.length !== 0
            ? filterCountries
            : results
        }
      />
    </div>
  );
}

export default App;
