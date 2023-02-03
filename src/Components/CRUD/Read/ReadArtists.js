import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ReadArtists() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7074/api/Artist").then((getData) => {
      setApiData(getData.data);
    });
  });

  const setData = (id, name, age, label) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("label", label);
  };

  const getData = () => {
    axios.get("https://localhost:7074/api/Artist").then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`https://localhost:7074/api/Artist/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <table className="table table-hover table-dark">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Label</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-striped ">
          {apiData &&
            apiData.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.label}</td>
                  <td>
                    <Link to="/updateartist">
                      <button
                        onClick={() =>
                          setData(data.id, data.name, data.age, data.label)
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
