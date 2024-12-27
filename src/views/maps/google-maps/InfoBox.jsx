import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const StyledMapWithAnInfoBox = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const center = {
    lat: 28.5606231,
    lng: 77.3515283
  };

  const markers = [
    {
      position: { lat: 28.5606231, lng: 77.3515283 },
      title: 'India',
      content: 'Hello India!'
    }
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={4}>
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} onClick={() => handleMarkerClick(marker)} />
      ))}

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <h3>{selectedMarker.title}</h3>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>{selectedMarker.content}</div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default StyledMapWithAnInfoBox;
