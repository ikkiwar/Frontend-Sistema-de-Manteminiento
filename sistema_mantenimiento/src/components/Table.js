import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './styles/table.css'
import Api from '../Api'

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

    }

    componentDidMount() {
        fetch(`${Api}${this.props.entidad}`, {
            method: "GET"
        }).then(Response => Response.json()).then(posts => {
            this.setState({ posts: posts })
        })
    }

    render() {
       
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