import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

class FormularioR extends React.Component {
    //constructor para los imput text
    constructor() {
        super();
        this.state = {
            value: null
        };
        //constructor de tipo de falla    
        this.state = {
            tipo: null
        };
        // constructor de falla
        this.state = {
            value: null
        };
    }





    render() {


        return (
            <div>

                <div >

                    <h1 style={{ textAlign: "center" }}>NUEVO RECURSO HUMANO</h1>

                    <div style={{ padding: "10px", marginLeft: "80px", margintop: "20px" }}>
                        <h3>Nombre:</h3>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size="40" value={this.state.value1} onChange={(e) => this.setState({ value1: e.target.value })} />
                            <label htmlFor="float-input">Nombre</label>
                        </span></div>

                    <div style={{ padding: "10px", marginLeft: "80px", margintop: "20px" }}>
                        <h3>Apellido:</h3>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size="50" value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} />
                            <label htmlFor="float-input">Apellido</label>
                        </span></div>


                    <div style={{ padding: "10px", marginLeft: "80px", margintop: "20px" }}>
                        <h3>Número Telefonico</h3>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" keyfilter="pint" value={this.state.value3} onChange={(e) => this.setState({ value3: e.target.value })} />
                            <label htmlFor="float-input">Numero telefonico</label>
                        </span>
                    </div>

                    <div style={{ padding: "10px", marginLeft: "80px", margintop: "50px"}}>
                        <h3>Cargo</h3>
                        <span className="p-float-label">
                            <InputText id="float-input" type="text" size="30" value={this.state.value4} onChange={(e) => this.setState({ value4: e.target.value })} />
                            <label htmlFor="float-input">Cargo</label>
                        </span>
                    </div>


                    <div style={{ float: "right", padding: "10px", margintop: "30px", textAlign: "end", marginRight: "40px"}}>
                        <Button label="Guardar" icon="pi pi-check" className="p-button-success" />
                        <Button label="Cancelar" icon="pi pi-times" className="p-button-danger" />

                    </div>
                </div>
            </div>


        )
    }

}
export default FormularioR