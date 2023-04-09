import { useState } from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import { LeafletEvent, Polyline } from 'leaflet'

import { ModalScreen } from '../modal-screen/modal-screen'

import './map.scss'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'

export const LeafleatMap = () => {
  const [mapLayer, setMapLayer] = useState<Polyline>();
  const [modalOpen, setModalopen] = useState<boolean>(false);

  const _onCreated = (e: LeafletEvent) => {
    const layer = e.layer;
    setMapLayer(layer);
    setModalopen(true);
  };
  return (
    <>
      <MapContainer center={[53.904, 27.561]} zoom={13}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <EditControl 
            position='topleft' 
            onCreated={_onCreated} 

            draw={{
            rectangle: true,
            circle: false,
            polyline: false,
            polygon: true,
            marker: false,
            circlemarker: false,
          }}

          edit={{
            edit: false,
            remove: false,
          }} />
        </FeatureGroup>
        {mapLayer && !!modalOpen && <ModalScreen mapLayer={mapLayer} modalOpen={modalOpen} setModalOpen={setModalopen} />}
      </MapContainer>

    </>
  )
}
