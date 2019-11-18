import React from "react";
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import Titulo from "../components/Titulo";
import Archivo from "../images/archivo.png";

class Procedimiento extends React.Component {
  render() {
    const columnas = [
      {
        Header: "Id Equipo",
        accessor: "0",
        style: {
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Equipo",
        accessor: "1",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Insumo",
        accessor: "2",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Procedimiento",
        accessor: "3",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Descripcion",
        accessor: "4",
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
          <Titulo titulo="Procedimientos Por Equipo" icono={Archivo} />
        </div>
        <Table
          entidad="/procedimientoporequipo"
          columnas={columnas}
          title="Procedimientos"
          icono={Archivo}
          titulo="Agregar Nuevo"
          enlace="#"
        />
      </div>
    );
  }
}
export default Procedimiento;
