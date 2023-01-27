import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminCRUD() {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [newArtistName, setNewArtistName] = useState('');
  const [newArtistAge, setNewArtistAge] = useState('');
  const [newArtistLabel, setNewArtistLabel] = useState('');
  const [newTrackTitle, setNewTrackTitle] = useState('');
  const [newTrackComposer, setNewTrackComposer] = useState('');
  const [newTrackSeconds, setNewTrackSeconds] = useState('');
  const [newTrackReleaseDate, setNewTrackReleaseDate] = useState('');
  const [newTrackPhotoUrl, setNewTrackPhotoUrl] = useState('');
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [allTracks, setAllTracks] = useState([]);

  useEffect(() => {
    // Fetch the list of albums from the backend
    axios.get('https://localhost:7074/api/Album')
      .then(response => setAlbums(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch the list of tracks from the backend
    axios.get('https://localhost:7074/api/Track')
      .then(response => setAllTracks(response.data))
      .catch(error => console.log(error));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    // Create the new album, artist, and track objects
    const newAlbum = {
      title: newAlbumTitle,
      releaseDate: new Date(),
    };
    const newArtist = {
      name: newArtistName,
      age: newArtistAge,
      label: newArtistLabel,
    };
    const newTrack = {
      title: newTrackTitle,
      composer: newTrackComposer,
      seconds: newTrackSeconds,
      releaseDate: newTrackReleaseDate,
      photoUrl: newTrackPhotoUrl,
    };

    // Send the POST requests to the backend
    axios.post('https://localhost:7074/api/Album', newAlbum)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    axios.post('https://localhost:7074/api/Artist', newArtist)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    axios.post('https://localhost:7074/api/Track', newTrack)
      .then(response => {
        console.log(response);
        // Add the new track to the album
        const updatedAlbum = {
        ...newAlbum,
        Artists: [newArtist],
        Tracks: [...selectedTracks, newTrack],
        };
        axios.put('https://localhost:7074/api/Album/${response.data.Id}', updatedAlbum)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
        }
        
        function handleTrackSelection(event) {
        const selectedTrackId = parseInt(event.target.value);
        setSelectedTracks([...selectedTracks, allTracks.find(track => track.id === selectedTrackId)]);
        }
        
        return (
        <div>
        <h1>Albums</h1>
        <table>
        <thead>
        <tr>
        <th>Title</th>
        <th>Release Date</th>
        </tr>
        </thead>
        <tbody>
        {albums.map(album => (
        <tr key={album.id}>
        <td>{album.title}</td>
        <td>{album.releaseDate}</td>
        </tr>
        ))}
        </tbody>
        </table>
        <h2>Add a new album</h2>
  <form onSubmit={handleSubmit}>
    <label>
      Album title:
      <input type="text" value={newAlbumTitle} onChange={event => setNewAlbumTitle(event.target.value)} />
    </label>
    <br />
    <label>
      Artist name:
      <input type="text" value={newArtistName} onChange={event => setNewArtistName(event.target.value)} />
    </label>
    <br />
    <label>
      Artist age:
      <input type="text" value={newArtistAge} onChange={event => setNewArtistAge(event.target.value)} />
    </label>
    <br />
    <label>
      Artist label:
      <input type="text" value={newArtistLabel} onChange={event => setNewArtistLabel(event.target.value)} />
    </label>
    <br />
    {/* <label>
      Track title:
      <input type="text" value={newTrackTitle} onChange={event => setNewTrackTitle(event.target.value)} />
    </label>
    <br />
    <label>
      Track composer:
      <input type="text" value={newTrackComposer} onChange={event => setNewTrackComposer(event.target.value)} />
    </label>
    <br />
    <label>
      Track seconds:
      <input type="text" value={newTrackSeconds} onChange={event => setNewTrackSeconds(event.target.value)} />
    </label>
    <br />
    <label>
      Track release date:
      <input type="text" value={newTrackReleaseDate} onChange={event => setNewTrackReleaseDate(event.target.value)} />
    </label>
    <br />
    <label>
      Track photo URL:
<input type="text" value={newTrackPhotoUrl} onChange={event => setNewTrackPhotoUrl(event.target.value)} />
</label> */}
<br />
<label>
Select tracks for this album:
<select multiple onChange={handleTrackSelection}>
{allTracks.map(track => (
<option key={track.id} value={track.id}>{track.title}</option>
))}
</select>
</label>
<br />
<button type="submit">Add album</button>
</form>
</div>
);
}

export default AdminCRUD;



