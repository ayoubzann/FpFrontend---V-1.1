import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminTracks() {
  const [tracks, setTracks] = useState([]);
  const [newTrack, setNewTrack] = useState({
    title: '',
    composer: '',
    seconds: '',
    releaseDate: '',
    photoUrl: ''
  });

  // Fetch the list of tracks from the API when the component mounts
  useEffect(() => {
    axios.get('https://localhost:7074/api/Track')
      .then(response => {
        setTracks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Handle changes to the form inputs
  const handleChange = event => {
    setNewTrack({
      ...newTrack,
      [event.target.name]: event.target.value
    });
  }

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    axios.post('https://localhost:7074/api/Track', newTrack)
      .then(response => {
        setTracks([...tracks, response.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Tracks</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Composer</th>
            <th>Seconds</th>
            <th>Release Date</th>
            <th>Photo Url</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map(track => (
            <tr key={track.id}>
              <td>{track.title}</td>
              <td>{track.composer}</td>
              <td>{track.seconds}</td>
              <td>{track.releaseDate}</td>
              <td>{track.photoUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Track</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleChange} value={newTrack.title} />
        </label>
        <label>
          Composer:
          <input type="text" name="composer" onChange={handleChange} value={newTrack.composer} />
        </label>
        <label>
          Seconds:
          <input type="number" name="seconds" onChange={handleChange} value={newTrack.seconds} />
        </label>
        <label>
          Release date:
          <input type="date" name="releaseDate" onChange={handleChange} value={newTrack.releaseDate} />
        </label>
        <label>
          Photo Url:
          <input type="text" name="photoUrl" onChange={handleChange} value={newTrack.photoUrl} />
        </label>
        <button type="submit">Add Track</button>
      </form>
    </div>
  );
}

export default AdminTracks;

