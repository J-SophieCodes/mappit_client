import React from 'react';
import { HeatmapLayer } from '@react-google-maps/api';

const Heatmap = ({ properties }) => {
  const heatmapData = properties?.map(property => {
    return {
      location: new window.google.maps.LatLng(property.latitude, property.longitude),
      weight: property.total_views/3000
    };
  });

  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  return (
    <HeatmapLayer
      data={heatmapData}
      options={{dissipating: false, radius: 20, maxIntensity: 2500, gradient: gradient}}
    />
  );
};

export default Heatmap;