import React from "react";
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import Titulo from "../components/Titulo";
import Invent from "../images/inventario.png";
import Item from "../images/item.png";

class Inventario extends React.Component {
  render() {
    const columnas = [
      {
        Header: "ID",
        accessor: "idMaterialInsumo",
        style: {
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Material Insumo",
        accessor: "materialInsumo",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Existencia",
        accessor: "existencia",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Stock Max",
        accessor: "stockMaximo",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Stock Min",
        accessor: "stockMinimo",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Observaciones",
        accessor: "observaciones",
        style: {
          textAlign: "center"
        }
      }
    ];

    return (
      <div>
        <Topbar />
        <Titulo titulo="Inventario" icono={Invent}/>
        <Table
          title="Inventario"
          entidad="/materialesinsumos"
          columnas={columnas}
          icono={Item}
          titulo="Agregar Item"
          enlace="#"
        />
      </div>
    );
  }
}

export default Inventario;
