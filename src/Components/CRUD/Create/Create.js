import React, {useState} from "react";
import axios from "axios";

export default function  Create() {

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
        <div>
            <form> 
                <label>Title</label>
                <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>

                <label>Composer</label>
                <input type="text" value={composer} name="composer" onChange={(e) => setComposer(e.target.value)} placeholder="Composer"/>

                <label>Seconds</label>
                <input type="number" value={seconds} name="seconds" onChange={(e) => setSeconds(e.target.value)} placeholder="Seconds"/>

                <label>Releasedate</label>
                <input type="date" value={releaseDate} name="releasedate" onChange={(e) => setReleaseDate(e.target.value)} placeholder="Releasedate"/>

                <label>Photo URL</label>
                <input type="text" value={photoUrl} name="photourl" onChange={(e) => setPhotoUrl(e.target.value)} placeholder="PhotoUrl"/>

                <button type="submit" onClick={sendDataToApi}>Submit</button>
            </form>

        </div>
    )
}