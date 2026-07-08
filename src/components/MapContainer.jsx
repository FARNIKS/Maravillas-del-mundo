import { forwardRef } from "react";

const MapContainer = forwardRef((props, ref) => {
  return <div id="map-container" ref={ref} />;
});

MapContainer.displayName = "MapContainer";

export default MapContainer;
