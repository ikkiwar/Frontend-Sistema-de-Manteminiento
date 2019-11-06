import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './styles/table.css'

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        }).then(Response => Response.json()).then(posts => {
            this.setState({ posts: posts })
        })
    }

    render() {
        const columns = [
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
        return (
            <div className="table">   <ReactTable
                columns={columns}
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