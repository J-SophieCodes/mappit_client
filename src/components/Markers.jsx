import React from 'react';
import { Marker } from '@react-google-maps/api';

const Markers = ({ properties, setSelected }) => {
  return (
    <>
      {properties.map(property => {
        return (
          <Marker
            key={property._id}
            position={{ lat: property.latitude, lng: property.longitude }}
            onClick={() => setSelected(property)}
          />
        )
      })}
    </>
  );
};

export default Markers;

          