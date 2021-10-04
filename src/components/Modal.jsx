import React from 'react';
import { InfoWindow } from '@react-google-maps/api';


const Modal = ({ selected, setSelected, setCenter }) => {

  return (
    <div id="modal">
      {(selected.latitude) && (
        <InfoWindow
          onLoad={() => setCenter({ lat: selected.latitude, lng: selected.longitude })}
          position={{ lat: selected.latitude, lng: selected.longitude }}
          onCloseClick={() => setSelected({})}
        >
          <div style={{ padding: 5 }}>
            <h3>{selected.name}</h3>
            <h4>{selected.city}, {selected.country}</h4>
            <p>Lease Term: {selected.lease_term_months} months</p>
            <p>Monthly Rate: ${selected.monthly_rate}</p>
            <p>{selected.total_views}</p>
          </div>
      </InfoWindow>
      )}

    </div>
  );
};

export default Modal;