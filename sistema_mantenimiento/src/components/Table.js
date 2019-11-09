import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './styles/table.css'
import Api from '../Api'

class Table extends React.Component {

    constructor(props) { // contructor para poder pasarle las props a nuestro Componente
        super(props);
        this.state = {
            posts: []
        }

    }

    componentDidMount() { // este es un estado del ciclo de via de React se ejecuta cuando se carga la pagina
        fetch(`${Api}${this.props.entidad}`, {  // aqui le pasamos el URL y la entidad que vamos a comsumir
            method: "GET"
        }).then(Response => Response.json()).then(posts => {
            this.setState({ posts: posts })
        })
    }

    render() { // aqui es donde esta nuestro componente tabla 
       
        return (
            <div className="table">   <ReactTable
                columns={this.props.columnas}
                data={this.state.posts}
                filterable
                noDataText={"Datos No encontrados"}
                defaultPageSize={10}
            />

            </div>

        )

    }


}
export default Table