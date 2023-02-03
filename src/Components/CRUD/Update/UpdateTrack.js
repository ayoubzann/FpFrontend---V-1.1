import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function  UpdateTrack() {

    
    const [title, setTitle] = useState('');
    const [composer, setComposer] = useState('');
    const [seconds, setSeconds] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [ID, setID] = useState(null);



useEffect(() => {
setTitle(localStorage.getItem('title'));
setComposer(localStorage.getItem('composer'));
setSeconds(localStorage.getItem('seconds'));
setReleaseDate(localStorage.getItem('releaseDate'));
setPhotoUrl(localStorage.getItem('photoUrl'));
setID(localStorage.getItem("ID"));

}, [])

const sendDataToApi = (event) => {
    event.preventDefault();
    axios.put(`https://localhost:7074/api/Track/${ID}`, {
      id: ID,
      title: title,
      composer: composer,
      seconds: seconds,
      releaseDate: releaseDate,
      photoUrl: photoUrl
    })
      .then(response => {
        console.log(response);
        // handle successful response
      })
      .catch(error => {
        console.log(error);
        // handle error
      });
  }
  

    return (
        <div>
           <form onSubmit={sendDataToApi}> 
           <div class="form-row align-items-center">
           <label>Title</label>
  <input class="form-control" value={title} type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
           </div>

           <div class="form-row align-items-center">
           <label>Composer</label>
  <input class="form-control" value={composer} type="text" name="composer" onChange={(e) => setComposer(e.target.value)} placeholder="Composer"/>
           </div>

           <div class="form-row align-items-center">
           <label>Seconds</label>
  <input class="form-control" value={seconds} type="number" name="seconds" onChange={(e) => setSeconds(e.target.value)} placeholder="Seconds"/>
           </div>

           <div class="form-row align-items-center">
           <label>Releasedate</label>
  <input class="form-control" value={releaseDate} type="text" name="releasedate" onChange={(e) => setReleaseDate(e.target.value)} placeholder="Releasedate"/>
           </div>

           <div class="form-row align-items-center">
           <label>Photo URL</label>
  <input class="form-control" value={photoUrl} type="text" name="photourl" onChange={(e) => setPhotoUrl(e.target.value)} placeholder="PhotoUrl"/>

           </div>
  <button class="btn btn-success" type="submit" >Update</button>

  <br/>
  <br/>
  <Link to="/admintrack">
        <button class="btn btn-link"> Back to Admin Tracks</button>
  </Link>
</form>


        </div>
    )
}