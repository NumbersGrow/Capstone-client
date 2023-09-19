import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import "./App.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FarmPage from "./pages/FarmPage/FarmPage";
import FestivalPage from "./pages/FestivalPage/FestivalPage";
import SingleFarmPage from "./pages/SingleFarmPage/SingleFarmPage";
import SingleFestivalPage from "./pages/SingleFestivalPage/SingleFestivalPage";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/farms" element={<FarmPage />} />
          <Route path="/farms/:id" element={<SingleFarmPage />} />
          <Route path="/festivals" element={<FestivalPage />} />
          <Route path="/festivals/:id" element={<SingleFestivalPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
