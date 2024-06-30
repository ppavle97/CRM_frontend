import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, PageNotFound } from "../pages";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
