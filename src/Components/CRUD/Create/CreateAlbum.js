import React, {useState} from "react";
import axios from "axios";

export default function  CreateAlbum() {

    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

const sendDataToApi = () => {
    axios.post('https://localhost:7074/api/Album', {
        title,
        releaseDate,
        photoUrl
    })
}

    return (
        <div >
            <form > 

                <div class="form-row align-items-center" >
                <label for="title">Title</label>
                <input class="form-control" type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
                </div>

                <br/>
                <br/>
                <div class="form-row align-items-center" >
                <label for="releaseDate">Releasedate</label>
                <input class="form-control" type="date" value={releaseDate} name="releaseDate" onChange={(e) => setReleaseDate(e.target.value)} placeholder="Releasedate"/> 
                </div>
                 
                <br/>
                <br/>

                <div class="form-row align-items-center">
                <label for="photoUrl" >Photo URL</label>
                <input class="form-control" type="text" value={photoUrl} name="photoUrl" onChange={(e) => setPhotoUrl(e.target.value)} placeholder="Photourl"/>          
                </div>
                
                <button class="btn btn-success" type="submit" onClick={sendDataToApi}>Submit</button>
            </form>
<br></br>
<br></br>
        </div>
    )
}