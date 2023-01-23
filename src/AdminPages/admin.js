import React, { useState } from 'react';
import axios from 'axios';

const AlbumCRUD = () => {
  const [album, setAlbum] = useState({
    title: '',
    releaseDate: '',
    photoUrl: ''
  });
  const [artist, setArtist] = useState({
    name: '',
    age: '',
    label: ''
  });
  const [track, setTrack] = useState({
    title: '',
    composer: '',
    seconds: '',
    releaseDate: '',
    photoUrl: ''
  });
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);

  const handleAlbumChange = e => {
    setAlbum({
      ...album,
      [e.target.name]: e.target.value
    });
  };

  const handleArtistChange = e => {
    setArtist({
      ...artist,
      [e.target.name]: e.target.value
    });
  };

  const handleTrackChange = e => {
    setTrack({
      ...track,
      [e.target.name]: e.target.value
    });
  };

  const handleAlbumSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7074/api/Album', album);
      setAlbums([...albums, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleArtistSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7074/api/Artist', artist);
      setArtists([...artists, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrackSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7074/api/Track', track);
      setTracks([...tracks, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAlbumUpdate = async (id, updatedAlbum) => {
    try {
      const res = await axios.put(`http://localhost:7074/api/Album/${id}`, updatedAlbum);
      setAlbums(albums.map(album => (album.id === id ? res.data : album)));
    } catch (err) {
      console.log(err);
    }
  };

  const handleArtistUpdate = async (id, updatedArtist) => {
    try {
      const res = await axios.put(`http://localhost:7074/api/Artist/${id}`, updatedArtist);
      setArtists(artists.map(artist => (artist.id === id ? res.data : artist)));
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrackUpdate = async (id, updatedTrack) => {
    try {
      const res = await axios.put(`http://localhost:7074/api/Track/${id}`, updatedTrack);
      setTracks(tracks.map(track => (track.id === id ? res.data : track)));
    } catch (err) {
      console.log(err);
    }
  };

  const handleAlbumDelete = async id => {
    try {
      await axios.delete(`http://localhost:7074/api/Album/${id}`);
      setAlbums(albums.filter(album => album.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleArtistDelete = async id => {
    try {
      await axios.delete(`http://localhost:7074/api/Artist/${id}`);
      setArtists(artists.filter(artist => artist.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrackDelete = async id => {
    try {
      await axios.delete(`http://localhost:7074/api/Track/${id}`);
      setTracks(tracks.filter(track => track.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Album CRUD</h1>
      <h2>Create Album</h2>
      <form onSubmit={handleAlbumSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={album.title}
            onChange={handleAlbumChange}
          />
        </label>
        <br />
        <label>
          Release Date:
          <input
            type='date'
            name='releaseDate'
            value={album.releaseDate}
            onChange={handleAlbumChange}
          />
        </label>
        <br />
        <label>
          Photo URL:
          <input
            type='text'
            name='photoUrl'
            value={album.photoUrl}
            onChange={handleAlbumChange}
          />
        </label>
        <br />
        <button type='submit'>Add Album</button>
      </form>
      <br />
      <h2>Create Artist</h2>
      <form onSubmit={handleArtistSubmit}>
      <label>
          Name:
          <input
            type='text'
            name='name'
            value={artist.name}
            onChange={handleArtistChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type='number'
            name='age'
            value={artist.age}
            onChange={handleArtistChange}
          />
        </label>
        <br />
        <label>
          Label:
          <input
            type='text'
            name='label'
            value={artist.label}
            onChange={handleArtistChange}
          />
        </label>
        <br />
        <button type='submit'>Add Artist</button>
      </form>
      <br />
      <h2>Create Track</h2>
      <form onSubmit={handleTrackSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={track.title}
            onChange={handleTrackChange}
          />
        </label>
        <br />
        <label>
          Composer:
          <input
            type='text'
            name='composer'
            value={track.composer}
            onChange={handleTrackChange}
          />
        </label>
        <br />
        <label>
          Seconds:
          <input
            type='number'
            name='seconds'
            value={track.seconds}
            onChange={handleTrackChange}
          />
        </label>
        <br />
        <label>
          Release Date:
          <input
            type='date'
            name='releaseDate'
            value={track.releaseDate}
            onChange={handleTrackChange}
          />
        </label>
        <br />
        <label>
          Photo URL:
          <input
            type='text'
            name='photoUrl'
            value={track.photoUrl}
            onChange={handleTrackChange}
          />
        </label>
        <br />
        <button type='submit'>Add Track</button>
      </form>
      <br />
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title} - {album.releaseDate}
            <button onClick={() => handleAlbumDelete(album.id)}>Delete</button>
            <button onClick={() => handleAlbumUpdate(album.id, album)}>
              Update
            </button>
          </li>
        ))}
      </ul>
      <h2>Artists</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name} - {artist.age}
            <button onClick={() => handleArtistDelete(artist.id)}>Delete</button>
            <button onClick={() => handleArtistUpdate(artist.id, artist)}>
              Update
            </button>
          </li>
        ))}
      </ul>
      <h2>Tracks</h2>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            {track.title} - {track.composer}
            <button onClick={() => handleTrackDelete(track.id)}>Delete</button>
            <button onClick={() => handleTrackUpdate(track.id, track)}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumCRUD;

