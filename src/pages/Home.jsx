import React, { useEffect } from "react";
import { homeStore } from "../stores/homeStore";
import { Link } from "react-router-dom";
import { ListCoins } from "../components/ListCoins/ListCoins";
import { Input } from "../components/Input/Input";

export const Home = () => {
  const store = homeStore();
  useEffect(() => {
    store.fetchCoint();
  }, []);
  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          <div>Search for a coin</div>
          <Input text={store.qyery} handleChange={store.setQuery} />
          <ListCoins />
        </div>
      </div>
    </div>
  );
};
