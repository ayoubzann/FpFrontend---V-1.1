import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ReadAlbums() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7074/api/Album").then((getData) => {
      setApiData(getData.data);
    });
  });

  const setData = (id, title, releaseDate, photoUrl) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("title", title);
    localStorage.setItem("releaseDate", releaseDate);
    localStorage.setItem("photoUrl", photoUrl);
  };

  const getData = () => {
    axios.get("https://localhost:7074/api/Ablum").then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`https://localhost:7074/api/Album/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <table className="table table-hover table-dark">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">ReleaseDate</th>
            <th scope="col">Cover</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-striped ">
          {apiData &&
            apiData.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.releaseDate}</td>
                  <td><img className="album-image" src={data.photoUrl}></img></td>
                  <td>
                    <Link to="/updatealbum">
                      <button
                        onClick={() =>
                          setData(data.id, data.title, data.releaseDate, data.photoUrl)
                        }
                      >
                        {" "}
                        Update{" "}
                      </button>
                    </Link>

                    <button onClick={() => onDelete(data.id)}> Delete </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
