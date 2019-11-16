import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import {RadioButton} from 'primereact/radiobutton';
import {InputTextarea} from 'primereact/inputtextarea';
import Topbar from '../components/Topbar';
import {Button} from 'primereact/button';



class Orden extends React.Component {
     
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

    toggle() {
        this.setState({disabled: !this.state.disabled});


//constructor del calendario y hora
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        
        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            dates1: null,
            dates2: null,
            minDate: minDate,
            maxDate: maxDate,
            invalidDates: [today]
        };

        this.dateTemplate = this.dateTemplate.bind(this);
    }

    

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0}}>{date.day}</div>
            );
        }
        else {
            return date.day;
        }
    
    }

    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };
        
        return (
            <div> <Topbar /> <br></br>
                    
            <div style={{ overflow: "hidden", marginLeft: "20%", marginRight: "20%", border: "solid #0a0a0a 5px",
  
                    boxShadow: "8px 8px 10px 0px #818181", marginTop: "5%", borderRadius: "10px 10px 10px 10px", marginBottom:"30px"}}>
            
                    <h1 style={{textAlign:"center"}}>Solicitud de Orden de Trabajo</h1>
                 
                        <div style={{padding: "10px", marginLeft: "50px", margintop: "40px", float: "left"}}>
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

                           <div style={{padding: "10px", marginLeft: "40px", margintop: "20px", float: "left"}} className="p-col-12 p-md-4">
                            <h3>Fecha de Solicitud</h3>
                            <Calendar value={this.state.date2} onChange={(e) => this.setState({date2: e.value})} locale={es} dateFormat="dd/mm/yy" showIcon={true}/>
                           </div>

                        <div style={{padding: "10px", marginLeft: "50px", margintop: "40px", float: "left"}} className="p-col-12 p-md-4">
                            <h3>Hora de Solicitud</h3>
                            <Calendar value={this.state.date9} onChange={(e) => this.setState({date9: e.value})} timeOnly={true} hourFormat="12" />
                        </div>  
                
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
  export default Orden
