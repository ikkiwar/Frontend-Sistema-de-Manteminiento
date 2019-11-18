import React from "react";
import { slide as Menu } from "react-burger-menu";
import Casa from "../images/casa.png";
import Orden from "../images/orden.png";
import Invent from "../images/editar.png";
import Humano from "../images/usuario.png";
import Ajustes from "../images/ajustes.png";
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
          <img src={Orden} /> &nbsp; Historial de Procedimientos
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
        <Link className="menu-item" to="#">
          <img src={Ajustes} /> &nbsp; Ajustes
        </Link>
        <hr />
      </Menu>
    );
  }
}

export default Sidebar;
