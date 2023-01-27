import React, { useState, useEffect } from "react"
import axios from "axios"

const AlbumCRUD = () =>{
    const[album, setAlbum] = useState({
        title: '',
        photoUrl: '',
        description: '',
        releaseDate: '',
    });
    
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
      axios.get('https://localhost:7074/api/Album')
      .then(Response => setAlbums(Response.data))
      .catch(error => console.log(error));
    }, []);

    const handleAlbumChange = e => {
        setAlbum({
            ...album,
            [e.target.name]: e.target.value
        });
    };

    const handleAlbumSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('https://localhost:7074/api/Album', album);
            setAlbums([...albums, res.data]);
        }
        catch(err){
            console.log(err);
        }
    };

    const handleAlbumUpdate = async (id, updatedAlbum)=>{
        try{
            const res = await axios.put('https://localhost:7074/api/Album/${id}', updatedAlbum);
            setAlbums(albums.map(album => (album.id === id ? res.data : album)));
        }
        catch (err){
            console.log(err);
        }
    };
    
    const handleAlbumDelete = async id => {
        try{
            await axios.delete('https://localhost:7074/api/Album/${id}');
            setAlbums(albums.filter(album => album.id !== id));
        }
        catch (err){
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
    <h2>Albums</h2>
      <table className="album-table">
        <tbody>
          <th>Album</th><th>Photo Url</th><th>Description</th><th>Releasedate</th>
        {albums.map(album => (
          <tr key={album.id}>
            <td className="table-row-album">{album.title}</td> 
            <td className="table-row-album"><img className="album-image" src={album.photoUrl} alt="N/A"></img></td> 
            <td className="table-row-album">{album.description}</td>
            <td className="table-row-album">{album.releaseDate}</td>
            <button className="crud-button" onClick={() => handleAlbumDelete(album.id)}>Delete</button>
            <button className="crud-button" onClick={() => handleAlbumUpdate(album.id, album)}>
              Update
            </button>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumCRUD;