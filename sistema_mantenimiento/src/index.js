import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './pages/Inicio';
import Inventario from './pages/Inventario';
import Orden from './pages/orden';



const contenedor = document.getElementById("root")


//ReactDOM.render(
  //  <Inicio/> // pagina orden de trabajo
    //, contenedor
 
    //)

    
ReactDOM.render(
    <Orden/> // se esta renderizando directamente la pagina orden
    , contenedor
)


//ReactDOM.render(
  //      <Inventario/> // se esta renderizando la pagina inventario
    //    , contenedor
    //)


  

