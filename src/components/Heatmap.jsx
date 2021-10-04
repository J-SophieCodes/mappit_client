import React from 'react';
import { HeatmapLayer } from '@react-google-maps/api';

const Heatmap = ({ properties }) => {
  const heatmapData = properties?.map(property => {
    return {
      location: new window.google.maps.LatLng(property.latitude, property.longitude),
      weight: property.total_views/3000
    };
  });

  return (
    <HeatmapLayer
      data={heatmapData}
      options={{dissipating: false, radius: 1, maxIntensity: 50}}
    />
  );
};

export default Heatmap;