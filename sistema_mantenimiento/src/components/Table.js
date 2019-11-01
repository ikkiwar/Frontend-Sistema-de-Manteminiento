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
                accessor: "userId"
            },
            {
                Header: "ID",
                accessor: "id"
            },
            {
                Header: "Title",
                accessor: "title"
            },
            {
                Header: "Body",
                accessor: "body"
            }

        ]
        return (
            <div className="table">   <ReactTable
                columns={columns}
                data={this.state.posts}
            />

            </div>

        )

    }


}
export default Table