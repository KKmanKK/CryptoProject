import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Show } from "./pages/Show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/:id" element={<Show />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;