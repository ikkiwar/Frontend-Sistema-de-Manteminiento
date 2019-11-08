import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './components/Topbar';
import Table from './components/Table'


const contenedor = document.getElementById("root")

const columnas = [
    {
        Header: "User ID",
        accessor: "userId",
        style: {
            textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
    },
    {
        Header: "ID",
        accessor: "id",
        style: {
            textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
    },
    {
        Header: "Title",
        accessor: "title"
    },
    {
        Header: "Body",
        accessor: "body"
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

ReactDOM.render(
    <div><Topbar />
        <Table entidad="/posts" columnas = {columnas}/>
    </div>
    , contenedor
)

