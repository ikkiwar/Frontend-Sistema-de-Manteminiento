import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './components/Topbar';
import Table from './components/Table'


const contenedor = document.getElementById("root")
ReactDOM.render(
    <div><Topbar/>
    <Table/>
    </div>
, contenedor
)

