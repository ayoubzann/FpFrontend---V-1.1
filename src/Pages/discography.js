import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function Discography() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from API endpoint
      axios.get('https://localhost:7074/api/Album')
        .then(response => setData(response.data))
        .catch(error => console.log(error));
    }, []); // Pass an empty array to only run the effect on mount



    
    return ( <div>
        <h1>Discography</h1>
        <h2>Albums & Mixtapes</h2>
        <table className="album-table">
{/* <tr>
                <th>Release Date</th>
                <th>Artwork</th>
                <th>Title</th>
            </tr> */}
    <tbody>
        {data.map(item => (
            <tr key={item.id}>
                <td className="table-row-album"><img className="album-image" src={item.photoUrl} alt="N/A"></img></td>
                <td className="table-row-album">{item.title}</td>
                <td className="table-row-album">{item.releaseDate}</td>
            </tr>
        ))}
    </tbody>
</table>
        </div>
    )
}
