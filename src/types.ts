import { Polyline } from "leaflet"

export type ModalPropsType = {
    mapLayer: Polyline,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    modalOpen: boolean,
}
