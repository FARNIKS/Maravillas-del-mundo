import PropTypes from "prop-types";
import { MARAVILLAS } from "../data/maravillas";

export default function Sidebar({ center, zoom, onIrALugar, onResetClick }) {
  return (
    <div className="sidebar">
      <h2>Atlas del Mundo</h2>
      <p className="subtitle">
        Selecciona una maravilla para explorar su historia:
      </p>

      <div className="lista-lugares">
        {MARAVILLAS.map((lugar) => (
          <div
            key={lugar.id}
            className="tarjeta-lugar"
            onClick={() => onIrALugar(lugar.id, lugar.coordenadas)}
          >
            <h3>{lugar.nombre}</h3>
            <p>{lugar.pais}</p>
          </div>
        ))}
      </div>

      <div className="coordenadas-info">
        Lng: {center[0].toFixed(4)} | Lat: {center[1].toFixed(4)} | Zoom:{" "}
        {zoom.toFixed(2)}
      </div>

      <button className="reset-button" onClick={onResetClick}>
        Vista Global
      </button>
    </div>
  );
}

// Validación de propiedades para mantener robusto el componente
Sidebar.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  onIrALugar: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};
