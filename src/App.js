import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
