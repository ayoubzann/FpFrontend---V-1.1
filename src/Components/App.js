import React from "react";
import Navbar from "./Navbar";
import Home from "../Pages/home";
import Videos from "../Pages/videos";
import Discography from "../Pages/discography";
import Login from "../Pages/login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/videos" element={ <Videos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
