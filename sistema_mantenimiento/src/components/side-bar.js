import React from "react";
import { slide as Menu } from "react-burger-menu";
import Casa from "../images/casa.png";
import Orden from "../images/editar.png";
import Invent from "../images/inventario.png";
import Humano from "../images/usuario.png";
import Calendario from "../images/calendario.png";
import Planificador from '../images/orden.png'
import "./styles/sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <Menu>
        <Link className="menu-item" to="/Inicio">
          <img src={Casa} /> &nbsp; Inicio
        </Link>
        <hr />
        <Link className="menu-item" to="/Procedimiento">
          <img src={Planificador} /> &nbsp; Historial de Procedimientos
        </Link>
        <hr />
        <Link className="menu-item" to="/HistorialOrden">
          <img src={Orden} /> &nbsp; Historial de Ordenes
        </Link>
        <hr />
        <Link className="menu-item" to="/Inventario">
          <img src={Invent} /> &nbsp; Inventario
        </Link>
        <hr />
        <Link className="menu-item" to="/RecursoHumano">
          <img src={Humano} /> &nbsp; Recurso Humano
        </Link>
        <hr />
        <Link className="menu-item" to="/Calendario">
          <img src={Calendario} /> &nbsp; Calendarización
        </Link>
        <hr />
      </Menu>
    );
  }
}

export default Sidebar;
