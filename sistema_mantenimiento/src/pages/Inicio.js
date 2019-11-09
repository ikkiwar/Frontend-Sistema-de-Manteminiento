import React from 'react';
import Topbar from '../components/Topbar';
import Table from '../components/Table';

class Inicio extends React.Component{
    // esta es una pagina esa contiene todos los componentes que va contener la pagina de inicio

render(){
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
            
                return (
                    <button className="detalle">Detalle</button>
    
                )
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
    
    ]

    return(<div><Topbar />
        <Table entidad="/recursoHumano" columnas = {columnas}/>
    </div>)
}
}

export default Inicio