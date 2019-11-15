import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Casa from '../images/casa.png';
import Orden from '../images/orden.png';
import Invent from '../images/editar.png'
import Humano from '../images/usuario.png';
import Ajustes from '../images/ajustes.png';
import './styles/sidebar.css';

class Sidebar extends React.Component{
render(){

    return(<Menu>
        <a className="menu-item" href="/Inicio" >
         <img src={Casa}/> &nbsp; Inicio 
        </a>
        <hr/>
        <a className="menu-item" href="/OrdenTrabajo">
        <img src={Orden}/> Ordenes de Mantenimiento
        </a>
        <hr/>
        <a className="menu-item" href="#">
          <img src={Invent}/> &nbsp; Inventario
        </a>
        <hr/>
        <a className="menu-item" href="/RecursoHumano">
          <img src={Humano}/> &nbsp; Recurso Humano
        </a>
        <hr/>
        <a className="menu-item" href="#">
          <img src={Ajustes}/> &nbsp; Ajustes
        </a>
        <hr/>
        
      </Menu>
  )
}


}

export default Sidebar