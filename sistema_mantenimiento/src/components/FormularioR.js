import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React from 'react';
import {InputText} from 'primereact/inputtext';
import {RadioButton} from 'primereact/radiobutton';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

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
                
        <div style={{ overflow: "hidden", marginLeft: "20%", marginRight: "20%", border: "solid #0a0a0a 5px",

                boxShadow: "8px 8px 10px 0px #818181", marginTop: "0%", borderRadius: "10px 10px 10px 10px", marginBottom:"30px"}}>
        
                <h1 style={{textAlign:"center"}}>Solicitud de Orden de Trabajo</h1>
             
                    <div style={{padding: "10px", marginLeft: "50px", margintop: "60px", float: "left"}}>
                    <h3>Codigo de Solicitud</h3>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" keyfilter="pint" value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} />
                        <label htmlFor="float-input">id solitud</label>
                    </span></div>

                    <div style={{padding: "10px", marginLeft: "40px", margintop: "20px", float: "left"}}>
                    <h3>Persona que solicita</h3>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" size="50" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                        <label htmlFor="float-input">nombre</label>
                    </span></div> 
  
            
                    <div style={{padding: "10px", marginLeft: "50px", margintop: "30px", float: "left"}}>
                    <h3>Codigo de Equipo</h3>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" size="30" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                        <label htmlFor="float-input">Codigo</label>
                    </span></div>
                    
                    <div style={{padding: "10px", marginLeft: "30px", margintop: "20px", float: "left"}}>
                    <h3>Tipo de Falla</h3>
                    <div className="p-grid" style={{width:'200px',margin:'5px'}}>
                    <div className="p-col-12">
                        <RadioButton inputId="rb1" name="tipo1" value="Preventiva" onChange={(e) => this.setState({tipo: e.value})} checked={this.state.tipo === 'Preventiva'} />
                        <label htmlFor="rb1" className="p-radiobutton-label">Preventiva</label>
                    </div>
                    <div className="p-col-12">
                        <RadioButton inputId="rb2" name="tipo2" value="Emergencia" onChange={(e) => this.setState({tipo: e.value})} checked={this.state.tipo === 'Emergencia'} />
                        <label htmlFor="rb2" className="p-radiobutton-label">Emergencia</label>
                    </div> 
                    </div>
                    </div>

                    <div style={{padding: "10px", marginLeft: "20px", margintop: "20px", float: "left"}}>                        
                     <h3>Causa de Falla</h3>
                     <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
                    </div>
                
                    <div style={{padding: "10px", marginLeft: "30px", margintop: "20px", float: "left"}}>
                    <h3>Descripcion del Problema</h3>
                    <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
                    </div>
            
                    <div style={{padding: "10px", marginLeft: "50px", margintop: "20px", float: "left"}}>
                    <h3>Codigo del Trabajador</h3>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" keyfilter="pint" value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} />
                        <label htmlFor="float-input">id Trabajador</label>
                    </span>
                    </div>

                    <div style={{padding: "10px", marginLeft: "50px", margintop: "50px", float:"left", marginRight:"50px"}}>  
                     <h3>Trabajador asignado</h3>
                    <span className="p-float-label">
                        <InputText id="float-input" type="text" size="30" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                        <label htmlFor="float-input">nombre</label>
                    </span>  
                    </div>
                    
                    
                    <div style={{float:"right", padding: "10px", marginLeft: "30px", margintop: "30px" , textAlign:"end"}}>
                    <Button label="Guardar" icon="pi pi-check" className="p-button-success"/>
                    <Button label="Cancelar" icon="pi pi-times" className="p-button-danger"/>
                
                    </div>
               </div>     
        </div>
       
            
    )
}

}
export default FormularioR