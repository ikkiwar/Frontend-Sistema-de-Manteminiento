import React from 'react';
import './styles/estilos.css';

class Titulo extends React.Component {



    render() {
        return (
            <div className="titulo">

                <h1 className="texto">
                    <img src={this.props.icono} /> &nbsp;
                    {this.props.titulo}
                </h1>
                <hr/>

            </div>

        )
    }

}
export default Titulo