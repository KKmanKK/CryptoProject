import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Show } from "./pages/Show";
import { Header } from "./components/Header/Header";
import "./style.scss";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/:id" element={<Show />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
