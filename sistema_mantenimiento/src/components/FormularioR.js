import React from 'react';

class FormularioR extends React.Component {

    render() {
        return (
            <div className="formulario">
                <form>
                    <div className="form-group">
                        <label for="">Nombre</label>
                        <input type="text" className="form-control"  placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <label for="">Apellido</label>
                        <input type="text" className="form-control"  placeholder="Apellido" />
                    </div>
                    <div className="form-group">
                        <label for="">Telefono</label>
                        <input type="number" className="form-control"  placeholder="########" />
                    </div>
                    <div className="form-group">
                        <label for="">Cargo</label>
                        <input type="text" className="form-control"  placeholder="Cargo" />
                    </div>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
            </div>
        )

    }



}
export default FormularioR