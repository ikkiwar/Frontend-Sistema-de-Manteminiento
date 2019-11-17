import React from 'react';
import Topbar from '../components/Topbar';
import Table from '../components/Table';
import Titulo from '../components/Titulo'


class Inventario extends React.Component{

    render(){
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
                accessor: "materialinsumo",
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
                accessor: "stockmaximo",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Stock Min",
                accessor: "stockminimo"
            },
            {
                Header: "Observaciones",
                accessor: "observaciones"
            }
        
        ]

        return(<div><Topbar />
        <Titulo titulo="Inventario"/>
            <Table  title="Inventario" entidad="/materialesinsumos" columnas = {columnas}/>
        </div>)
}
}

export default Inventario