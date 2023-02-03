import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ReadTracks() {


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
    localStorage.setItem("seconds", seconds);
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
            <table className="table table-hover table-dark">
            <thead class="thead-dark">
    <tr>
      <th scope="col">Cover</th>
      <th scope="col">Title</th>
      <th scope="col">Composer</th>
      <th scope="col">Seconds</th>
      <th scope="col">Releasedate</th>
      <th scope="col">URL</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
    <tbody className="table-striped ">
        {apiData && apiData.map((data) => {
            return (
            <tr key={data.id}>
                <td ><img className="album-image" src={data.photoUrl} alt="N/A"></img></td>
                <td >{data.title}</td>
                <td >{data.composer}</td>
                <td >{data.seconds}</td>
                <td >{data.releaseDate}</td>
                <td >{data.photoUrl}</td>
                <td ><Link to="/update">
                <button onClick={() => setData(data.id, data.title, data.composer, data.seconds, data.releaseDate, data.photoUrl)}> Update </button>
                </Link>
                
                <button onClick={() => onDelete(data.id)}> Delete </button></td>
            </tr>
        )})}
    </tbody>
</table>
        </div>
    )
}