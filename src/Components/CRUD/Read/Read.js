import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {


    const [apiData, setApiData] = useState([]);
useEffect(() => {
    axios.get('https://localhost:7074/api/Track')
    .then((getData) => {
        setApiData(getData.data)
    })
})


const setData = (id, title, composer, seconds, releaseDate, photoUrl) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("title", title);
    localStorage.setItem("composer", composer);
    localStorage.setItem("releaseDate", releaseDate);
    localStorage.setItem("photoUrl", photoUrl);
}

const getData = () => {
    axios.get('https://localhost:7074/api/Track')
    .then((getData) => {
        setApiData(getData.data)})
    }

    const onDelete = (id) => {
        axios.delete(`https://localhost:7074/api/Track/${id}`)
        .then(() => {
            getData();
        })
    }

    
    return (
        <div>
            <table className="album-table">
    <tbody>
        {apiData && apiData.map((data) => {
            return (
            <tr key={data.id}>
                <td className="table-row-album"><img className="album-image" src={data.photoUrl} alt="N/A"></img></td>
                <td className="table-row-album">{data.title}</td>
                <td className="table-row-album">{data.composer}</td>
                <td className="table-row-album">{data.seconds}</td>
                <td className="table-row-album">{data.releaseDate}</td>
                <td className="table-row-album">{data.photoUrl}</td>
                <Link to="/update">
                <td className="table-row-album"><button color="green" onClick={() => setData(data.id, data.title, data.composer, data.seconds, data.releaseDate, data.photoUrl)}> Update </button></td>
                </Link>
                <Link to="/delete">
                <td className="table-row-album"><button color="red" onClick={() => onDelete(data.id)}> Delete </button></td>
                </Link>
            </tr>
        )})}
    </tbody>
</table>
        </div>
    )
}