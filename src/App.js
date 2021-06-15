import React, { useEffect, useState } from "react";
import "normalize-css";

import { Cards, Chart, Countries } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [items, setItems] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      const data = await fetchData();

      setItems(data);
    };
    fetchedData();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);

    setItems(data, country);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headertext}>COVID TRACKER</h1>
      <Cards data={items} />
      <Countries handleCountryChange={handleCountryChange} />
      <Chart data={items} country={country} setCountry={setCountry} />
    </div>
  );
};

export default App;
