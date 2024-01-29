import React from "react";
import { Link } from "react-router-dom";
import style from "./ListItem.module.scss";
export const ListItem = ({ coin }) => {
  return (
    <div className={style.item}>
      <img src={coin.image} className={style.img} alt="" />
      <Link to={`${coin.id}`} className={style.link}>
        {coin.name}
      </Link>
      <span>ds</span>
    </div>
  );
};
