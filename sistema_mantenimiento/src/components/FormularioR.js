import React from 'react';
import './styles/formulario.css'

class FormularioR extends React.Component {

    render() {
        return (
            <div  className="formulario" >
                <form  className="formu" >
                    <div className="">
                        <label for="">Nombre:</label>
                        <input type="text" className="campos"  placeholder="Nombre" />
                    </div>
                    <div className="">
                        <label for="">Apellido:</label>
                        <input type="text" className="campos"  placeholder="Apellido" />
                    </div>
                    <div className="">
                        <label for="">Telefono:</label>
                        <input type="text" className="campos" pattern="[0-9]{1,8}" placeholder="########" />
                    </div>
                    <div className="">
                        <label for="">Cargo:</label>
                        <input type="text" className="campos"  placeholder="Cargo" />
                    </div>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>
        )

    }



}
export default FormularioR