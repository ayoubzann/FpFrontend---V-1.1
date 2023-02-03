import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UpdateAlbum() {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [ID, setID] = useState(null);

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setReleaseDate(localStorage.getItem("releaseDate"));
    setPhotoUrl(localStorage.getItem("photoUrl"));
    setID(localStorage.getItem("ID"));
  }, []);

  const sendDataToApi = (event) => {
    event.preventDefault();
    axios
      .put(`https://localhost:7074/api/Album/${ID}`, {
        id: ID,
        title: title,
        releaseDate: releaseDate,
        photoUrl: photoUrl,
      })
      .then((response) => {
        console.log(response);
        // handle successful response
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };

  return (
    <div>
      <form onSubmit={sendDataToApi}>
        <div class="form-row align-items-center">
          <label>Title</label>
          <input
            class="form-control"
            value={title}
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>

        <div class="form-row align-items-center">
          <label>Releasedate</label>
          <input
            class="form-control"
            value={releaseDate}
            type="date"
            name="releaseDate"
            onChange={(e) => setReleaseDate(e.target.value)}
            placeholder="Releasedate"
          />
        </div>

        <div class="form-row align-items-center">
          <label>Photo URL</label>
          <input
            class="form-control"
            value={photoUrl}
            type="text"
            name="photoUrl"
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="Photourl"
          />
        </div>

        <button class="btn btn-success" type="submit">
          Update
        </button>

        <br />
        <br />
        <Link to="/adminalbum">
          <button class="btn btn-link"> Back to Admin Album</button>
        </Link>
      </form>
    </div>
  );
}
