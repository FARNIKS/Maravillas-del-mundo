import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MARAVILLAS, INITIAL_CENTER, INITIAL_ZOOM } from "../data/maravillas";

export default function useMap(mapContainerRef) {
  const mapRef = useRef(null);
  const markersRef = useRef({});

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    // Si no hay contenedor físico en el DOM, no inicializar nada
    if (!mapContainerRef.current) return;

    // 1. Inicialización de la instancia de Mapbox
    mapRef.current = new mapboxgl.Map({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });

    // 2. Escuchar el movimiento para actualizar estados de React
    mapRef.current.on("move", () => {
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();
      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    // 3. Inyección de Marcadores y Popups
    MARAVILLAS.forEach((lugar) => {
      const imagenHTML = lugar.imagen
        ? `<img src="${lugar.imagen}" alt="${lugar.nombre}" class="popup-image" />`
        : `<div class="popup-spacer"></div>`;

      const popup = new mapboxgl.Popup({ offset: 30, closeButton: true })
        .setHTML(`
        <div class="popup-card">
          ${imagenHTML}
          <div class="popup-body">
            <h3 class="popup-title">${lugar.nombre}</h3>
            <h4 class="popup-country">${lugar.pais}</h4>
            <p class="popup-description">${lugar.descripcion}</p>
          </div>
        </div>
      `);

      const marker = new mapboxgl.Marker({ color: "#e74c3c" })
        .setLngLat(lugar.coordenadas)
        .setPopup(popup)
        .addTo(mapRef.current);

      markersRef.current[lugar.id] = marker;
    });

    // 4. Limpieza del mapa al desmontar el componente
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [mapContainerRef]); // Se ejecuta cuando el contenedor está listo en el DOM

  // Método: Volar a un lugar específico cerrando modales intermedios
  const irALugar = (id, coordenadas) => {
    if (mapRef.current) {
      MARAVILLAS.forEach((lugar) => {
        const m = markersRef.current[lugar.id];
        if (m && m.getPopup().isOpen()) {
          m.togglePopup();
        }
      });

      mapRef.current.flyTo({
        center: coordenadas,
        zoom: 14,
        essential: true,
        duration: 3000,
      });

      mapRef.current.once("moveend", () => {
        const targetMarker = markersRef.current[id];
        if (targetMarker) {
          const activePopup = targetMarker.getPopup();
          if (activePopup && !activePopup.isOpen()) {
            targetMarker.togglePopup();
          }
        }
      });
    }
  };

  // Método: Resetear la cámara a la perspectiva global
  const resetearVista = () => {
    if (mapRef.current) {
      MARAVILLAS.forEach((lugar) => {
        const m = markersRef.current[lugar.id];
        if (m && m.getPopup().isOpen()) {
          m.togglePopup();
        }
      });

      mapRef.current.flyTo({
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM,
        essential: true,
      });
    }
  };

  // Retornamos un objeto con lo necesario para la UI
  return {
    center,
    zoom,
    irALugar,
    resetearVista,
  };
}
