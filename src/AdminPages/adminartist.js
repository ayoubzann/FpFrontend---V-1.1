import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminArtist() {
  const [artists, setArtists] = useState([]);
  const [newArtist, setNewArtist] = useState({
    name: '',
    age: '',
    label: ''
  });

  // Fetch the list of artists from the API when the component mounts
  useEffect(() => {
    axios.get('https://localhost:7074/api/Artist')
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Handle changes to the form inputs
  const handleChange = event => {
    setNewArtist({
      ...newArtist,
      [event.target.name]: event.target.value
    });
  }

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    axios.post('https://localhost:7074/api/Artist', newArtist)
      .then(response => {
        setArtists([...artists, response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Artists</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {artists.map(artist => (
            <tr key={artist.id}>
              <td>{artist.name}</td>
              <td>{artist.age}</td>
              <td>{artist.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Artist</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} value={newArtist.name} />
        </label>
        <label>
          Age:
          <input type="number" name="age" onChange={handleChange} value={newArtist.age} />
        </label>
        <label>
          Label:
          <input type="text" name="label" onChange={handleChange} value={newArtist.label} />
        </label>
        <button type="submit">Add Artist</button>
      </form>
    </div>
  );
}

export default AdminArtist;
