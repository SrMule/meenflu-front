import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function Map() {

    const [markers, setMarkers] = useState([
        { lat: -33.45, lng: -70.66, numero: 1 },
        { lat: -33.49, lng: -70.68, numero: 2 },
        { lat: -33.52, lng: -70.71, numero: 3 },
    ]);
      
    return (
        <div className='w-full min-h-screen'>
            <MapContainer
                style={{ width: '100%', height: '400px' }}
                center={[-33.47, -70.69]}
                zoom={13}
                scrollSnap={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers.map((marker) => (
                    <Marker key={marker.numero} position={[marker.lat, marker.lng]}>
                        <Popup autoOpen={true}>Marcador {marker.numero}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}