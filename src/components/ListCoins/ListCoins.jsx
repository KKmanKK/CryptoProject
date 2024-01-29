import React from "react";
import { homeStore } from "../../stores/homeStore";
import { ListItem } from "../ListItem/ListItem";
import style from "./ListCoins.module.scss";

export const ListCoins = () => {
  const store = homeStore();
  return (
    <div className={style.list}>
      {store.coins.map((coin) => {
        return <ListItem key={coin.id} coin={coin} />;
      })}
    </div>
  );
};
