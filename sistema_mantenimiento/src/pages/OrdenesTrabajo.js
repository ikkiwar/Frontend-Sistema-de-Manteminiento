import React from 'react';
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import Titulo from "../components/Titulo";
import Orden from "../images/orden.png"
class OrdenesTrabajo extends React.Component{

render(){
    const columnas = [
        {
          Header: "Id",
          accessor: "0",
          style: {
            textAlign: "center"
          },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Fecha",
          accessor: "1",
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Encargado",
          accessor: "2",
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Mantenimiento",
          accessor: "3",
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Estado",
          accessor: "5",
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Acciones",
          Cell: props => {
            return <button className="detalle">Detalle</button>;
          },
          width: 100,
          maxWidth: 100,
          minWidth: 100,
          filterable: false,
          sortable: false,
          style: {
            textAlign: "center"
          }
        }
      ];
  
      return (
        <div>
          <Topbar />
          <div>
            <Titulo titulo="Historial de Ordenes de Trabajo" icono={Orden} />
          </div>
          <Table
            entidad="/ordentrabajo/1"
            columnas={columnas}
            title="Historial"
            icono={Orden}
            titulo="Nueva Orden"
            enlace="/OrdenTrabajo "
          />
        </div>
      );
}

}
export default OrdenesTrabajo