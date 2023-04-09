import { useEffect } from 'react'
import { useMap } from "react-leaflet"
import { ModalPropsType } from "../../types"

import styles from './modal-screen.module.scss'

export const ModalScreen = ({ mapLayer, modalOpen, setModalOpen }: ModalPropsType) => {
  const layerArea = mapLayer;
  
  const latLngs = layerArea
    .getLatLngs()
    .flat()
    .map(point => Object.entries(point))
    .map(point => Object.fromEntries(point));

  const map = useMap();

  useEffect(() => {
    if(modalOpen === true) {
      map.scrollWheelZoom.disable();
      map.dragging.disable();
      map.doubleClickZoom.disable();
    } 
  }, [modalOpen, map]);

  const confirmButton = () => {
    map.removeLayer(layerArea);
    setModalOpen(false);
    map.scrollWheelZoom.enable();
    map.dragging.enable();
    map.doubleClickZoom.enable();
  };
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <h2 className={styles.modal_title}>Coordinates</h2>
        <div className={styles.coords_wrapper}>
        <ul>
            {layerArea && 
            latLngs.map((el, i) => (
              <li key={el.lat}>
                {`Point ${i+1}`}:
                <ul>
                  <li>{`Latitude: ${el.lat.toFixed(3)}`}</li>
                  <li>{`Langitude: ${el.lng.toFixed(3)}`}</li>
                </ul>
              </li>
            ))}
        </ul>
        </div>
        <button onClick={confirmButton} className={styles.modal_button}>Confirm</button>
      </div>
    </div>
  )
}
