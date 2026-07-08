import { useRef } from "react";
import Sidebar from "./components/Sidebar";
import MapContainer from "./components/MapContainer";
import useMap from "./hooks/useMap";

import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

function App() {
  const mapContainerRef = useRef(null);

  const { center, zoom, irALugar, resetearVista } = useMap(mapContainerRef);

  return (
    <>
      <Sidebar
        center={center}
        zoom={zoom}
        onIrALugar={irALugar}
        onResetClick={resetearVista}
      />
      <MapContainer ref={mapContainerRef} />
    </>
  );
}

export default App;
