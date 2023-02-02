import React, {useState, useEffect} from "react";
import axios from "axios";

export default function  Update() {

    
const [title, setTitle] = useState('');
const [composer, setComposer] = useState('');
const [seconds, setSeconds] = useState('');
const [releaseDate, setReleaseDate] = useState('');
const [photoUrl, setPhotoUrl] = useState('');
const [ID, setID] = useState(null);

const sendDataToApi = () => {
    axios.put(`https://localhost:7074/api/Track/${ID}`, {
        title,
        composer,
        seconds,
        releaseDate,
        photoUrl
    })
}


useEffect(() => {
setTitle(localStorage.getItem('title'));
setComposer(localStorage.getItem('composer'));
setSeconds(localStorage.getItem('seconds'));
setReleaseDate(localStorage.getItem('releaseDate'));
setPhotoUrl(localStorage.getItem('photoUrl'));
setID(localStorage.getItem("ID"));

}, [])


    return (
        <div>
            <form> 
                <label>Title</label>
                <input value={title} type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>

                <label>Composer</label>
                <input value={composer} type="text" name="composer" onChange={(e) => setComposer(e.target.value)} placeholder="Composer"/>

                <label>Seconds</label>
                <input value={seconds} type="number" name="seconds" onChange={(e) => setSeconds(e.target.value)} placeholder="Seconds"/>

                <label>Releasedate</label>
                <input value={releaseDate} type="date" name="releasedate" onChange={(e) => setReleaseDate(e.target.value)} placeholder="Releasedate"/>

                <label>Photo URL</label>
                <input value={photoUrl} type="text" name="photourl" onChange={(e) => setPhotoUrl(e.target.value)} placeholder="PhotoUrl"/>

                <button type="submit" onClick={sendDataToApi}>Update</button>
            </form>

        </div>
    )
}