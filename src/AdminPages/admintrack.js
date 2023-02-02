import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from '../Components/CRUD/Create/Create';
import Read from '../Components/CRUD/Read/Read';

function AdminTracks() {
  

  return (
  <div>
      <Create/>
      <Read/>
    </div>

  );
}

export default AdminTracks;

