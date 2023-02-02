import React from "react";
import Navbar from "./Navbar";
import Home from "../Pages/home";
import Videos from "../Pages/videos";
import Discography from "../Pages/discography";
import Login from "../Pages/login";
import Admin from "../AdminPages/admin";
import AdminTracks from "../AdminPages/admintrack";
import AdminArtist from "../AdminPages/adminartist";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminCRUD from "../AdminPages/adminCRUD";
import Update from "./CRUD/Update/update";
import Delete from "./CRUD/Delete/delete";
import Create from "./CRUD/Create/Create";
import Read from "./CRUD/Read/Read";

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
          <Route path="/admintrack" element={<AdminTracks />} />
          <Route path="/adminartist" element={<AdminArtist />} />
          <Route path="/adminCRUD" element={<AdminCRUD />} />
          <Route path="/update" exact element={<Update/>} />
          <Route path="/create" exact element={<Create/>} />
          <Route path="/read" exact element={<Read/>} />
                          
        </Routes>
      </div>


    </>
  );
};

export default App;
