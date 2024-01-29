import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={style.menu}>
      <Link to="/" className={style.menuLink}>
        Coins
      </Link>
    </header>
  );
};
