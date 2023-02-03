import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UpdateArtist() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [label, setLabel] = useState("");
  const [ID, setID] = useState(null);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setLabel(localStorage.getItem("label"));
    setID(localStorage.getItem("ID"));
  }, []);

  const sendDataToApi = (event) => {
    event.preventDefault();
    axios
      .put(`https://localhost:7074/api/Artist/${ID}`, {
        id: ID,
        name: name,
        age: age,
        label: label,
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
          <label>Name</label>
          <input
            class="form-control"
            value={name}
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div class="form-row align-items-center">
          <label>Age</label>
          <input
            class="form-control"
            value={age}
            type="number"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
        </div>

        <div class="form-row align-items-center">
          <label>Seconds</label>
          <input
            class="form-control"
            value={label}
            type="text"
            name="label"
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Label"
          />
        </div>

        <button class="btn btn-success" type="submit">
          Update
        </button>

        <br />
        <br />
        <Link to="/adminartist">
          <button class="btn btn-link"> Back to Admin Artists</button>
        </Link>
      </form>
    </div>
  );
}
