import React, {useState} from "react";
import axios from "axios";

export default function  CreateArtist() {

const [name, setName] = useState('');
const [age, setAge] = useState('');
const [label, setLabel] = useState('');

const sendDataToApi = () => {
    axios.post('https://localhost:7074/api/Artist', {
        name,
        age,
        label
    })
}

    return (
        <div >
            <form > 

                <div class="form-row align-items-center" >
                <label for="name">Name</label>
                <input class="form-control" type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder="Artists name..."/>
                </div>

                <br/>
                <br/>
                <div class="form-row align-items-center" >
                <label for="age">Age</label>
                <input class="form-control" type="number" value={age} name="age" onChange={(e) => setAge(e.target.value)} placeholder="Artists age..."/> 
                </div>
                 
                <br/>
                <br/>

                <div class="form-row align-items-center">
                <label for="label" >Label</label>
                <input class="form-control" type="text" value={label} name="label" onChange={(e) => setLabel(e.target.value)} placeholder="Label..."/>          
                </div>
                
                <button class="btn btn-success" type="submit" onClick={sendDataToApi}>Submit</button>
            </form>
<br></br>
<br></br>
        </div>
    )
}