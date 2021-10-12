import { useState, useEffect } from 'react';
import Modal from './Modal';
import Heatmap from './Heatmap';
import Markers from './Markers';
import Searchbar from './Searchbar';
import ApiClient from '../lib/ApiClient';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const LIBRARIES = ["visualization"];

function App() {
  const [selected, setSelected] = useState({});
  const [properties, setProperties] = useState([]);
  const [center, setCenter] = useState({ lat: 43.641382, lng: -79.431819 });
  const [city, setCity] = useState("");

  useEffect(() => { 
    if (city !== "") ApiClient.getPropertiesByCity(city, data => setProperties(data));
  }, [city])

  return (
    <div id="App">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        libraries={LIBRARIES}
      >

        <Searchbar setCity={setCity} />

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
