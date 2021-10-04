import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Heatmap from './Heatmap';
import Markers from './Markers';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

const LIBRARIES = ["visualization"];

function App() {
  const [selected, setSelected] = useState({});
  const [properties, setProperties] = useState([]);
  const [center, setCenter] = useState({ lat: 43.641382, lng: -79.431819 });

  useEffect(() => { 
    axios.get('http://localhost:5000/properties')
      .then(({data}) => {
        setProperties(data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div id="App">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        libraries={LIBRARIES}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100vw', height: '100vh' }}
          center={center}
          zoom={10}
        >
          <Markers properties={properties} setSelected={setSelected} />
          <Modal selected={selected} setSelected={setSelected} setCenter={setCenter} />
          <Heatmap properties={properties} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
