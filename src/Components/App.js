import React from "react";
import Navbar from "./Navbar";
import Home from "../Pages/home";
import Videos from "../Pages/videos";
import Discography from "../Pages/discography";
import Login from "../Pages/login";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UpdateTrack from "./CRUD/Update/UpdateTrack";
import CreateTrack from "./CRUD/Create/CreateTrack";
import ReadTracks from "./CRUD/Read/ReadTracks";
import CreateArtist from "./CRUD/Create/CreateArtist";
import UpdateArtist from "./CRUD/Update/UpdateArtist";
import ReadArtists from "./CRUD/Read/ReadArtists";
import CreateAlbum from "./CRUD/Create/CreateAlbum";
import ReadAlbums from "./CRUD/Read/ReadAlbums";
import UpdateAlbum from "./CRUD/Update/UpdateAlbum";
import AdminPanel from "../AdminPages/AdminPanel";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API endpoint
    axios
      .get("https://localhost:7074/api/Album")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []); // Pass an empty array to only run the effect on mount

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/updatetrack" exact element={<UpdateTrack />} />
          <Route path="/updatealbum" exact element={<UpdateAlbum />} />
          <Route path="/updateartist" exact element={<UpdateArtist />} />
          <Route path="/createtrack" exact element={<CreateTrack />} />
          <Route path="/createalbum" exact element={<CreateAlbum />} />
          <Route path="/createartist" exact element={<CreateArtist />} />
          <Route path="/readtrack" exact element={<ReadTracks />} />
          <Route path="/readalbum" exact element={<ReadAlbums />} />
          <Route path="/readartist" exact element={<ReadArtists />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
