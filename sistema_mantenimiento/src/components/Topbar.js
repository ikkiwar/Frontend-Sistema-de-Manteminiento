import React from "react";
import Sidebar from "./side-bar";
import "./styles/topbar.css";
import Ues from "../images/ues.png";
import { Link } from "react-router-dom";

class Topbar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <Sidebar />
        <div className="top-bar-letter">
          {" "}
          <img src={Ues} className="icono" />
          Sistema de Mantenimiento/Administración de Centros de Computo
        </div>
      </div>
    );
  }
}

export default Topbar;
