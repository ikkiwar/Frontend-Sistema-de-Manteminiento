import React from "react";
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import Titulo from "../components/Titulo";
import Usuario from "../images/usuario.png";
import Tecnico from "../images/empleado.png";

class RecursoHumano extends React.Component {
  render() {
    const columnas = [
      {
        Header: "ID",
        accessor: "idRecursoHumano",
        style: {
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Nombre",
        accessor: "nombre",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Apellido",
        accessor: "apellido",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Telefono",
        accessor: "telefono",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Cargo",
        accessor: "observaciones"
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
        <Titulo titulo="Recurso Humano" icono={Usuario} />
        <Table entidad="/recursoHumano" columnas = {columnas} title="Tecnicos"
        icono={Tecnico} titulo="Nuevo Tecnico "
        enlace ="/NuevoRecurso"
        />
      </div>
    );
  }
}
export default RecursoHumano;
