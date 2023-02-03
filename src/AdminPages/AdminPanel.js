import React from "react";
import Create from "../Components/CRUD/Create/CreateTrack";
import CreateAlbum from "../Components/CRUD/Create/CreateAlbum";
import CreateArtist from "../Components/CRUD/Create/CreateArtist";
import Read from "../Components/CRUD/Read/ReadTracks";
import ReadAlbums from "../Components/CRUD/Read/ReadAlbums";
import ReadArtists from "../Components/CRUD/Read/ReadArtists";

export default function AdminPanel() {
  return (
    <div>
      <div>
        <div>
          <h2>Tracks</h2>
          <Create />
        </div>
        <div>
          <Read />
        </div>
      </div>

      <div>
        <div>
          <h2>Albums</h2>
          <CreateAlbum />
        </div>
        <div>
          <ReadAlbums />
        </div>
      </div>

      <div>
        <div>
          <h2>Artists</h2>
          <CreateArtist />
        </div>
        <div>
          <ReadArtists />
        </div>
      </div>
    </div>
  );
}
