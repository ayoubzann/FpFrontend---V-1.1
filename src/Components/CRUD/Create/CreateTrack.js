import React, {useState} from "react";
import axios from "axios";

export default function  CreateTrack() {

const [title, setTitle] = useState('');
const [composer, setComposer] = useState('');
const [seconds, setSeconds] = useState('');
const [releaseDate, setReleaseDate] = useState('');
const [photoUrl, setPhotoUrl] = useState('');


const sendDataToApi = () => {
    axios.post('https://localhost:7074/api/Track', {
        title,
        composer,
        seconds,
        releaseDate,
        photoUrl
    })
}

    return (
        <div >
            <form > 

                <div class="form-row align-items-center" >
                <label>Title</label>
                <input class="form-control" type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
                </div>

                <br/>
                <br/>
                <div class="form-row align-items-center" >
                <label for="composer">Composer</label>
                <input class="form-control" type="text" value={composer} name="composer" onChange={(e) => setComposer(e.target.value)} placeholder="Composer"/> 
                </div>
                 
                <br/>
                <br/>

                <div class="form-row align-items-center">
                <label>Seconds</label>
                <input class="form-control" type="number" value={seconds} name="seconds" onChange={(e) => setSeconds(e.target.value)} placeholder="Seconds"/>          
                </div>
                
                
                <br/>
                <br/>
                <div class="form-row align-items-center">
                <label>Releasedate</label>
                <input class="form-control" type="date" value={releaseDate} name="releasedate" onChange={(e) => setReleaseDate(e.target.value)} placeholder="Releasedate"/>
                </div>
                <br/>
                <br/>

                <div class="form-row align-items-center">
                <label>Photo URL</label>
                <input class="form-control" type="text" value={photoUrl} name="photourl" onChange={(e) => setPhotoUrl(e.target.value)} placeholder="PhotoUrl"/>
                </div>
                <br/>
                <br/>
                
                <button class="btn btn-success" type="submit" onClick={sendDataToApi}>Submit</button>
            </form>
<br></br>
<br></br>
        </div>
    )
}