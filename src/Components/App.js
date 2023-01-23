import React from "react";
import Navbar from "./Navbar";
import Home from "../Pages/home";
import Videos from "../Pages/videos";
import Discography from "../Pages/discography";
import Login from "../Pages/login";
import Admin from "../AdminPages/admin";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {


  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Fetch data from API endpoint
    axios.get('https://localhost:7074/api/Album')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []); // Pass an empty array to only run the effect on mount


  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/videos" element={ <Videos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </div>


    </>
  );
};

export default App;
