import React from 'react';
import FormularioR from '../components/FormularioR';
import Topbar from '../components/Topbar';

class NuevoRecurso extends React.Component {

    render() {
        return (
            <div>
                <Topbar /><br></br>

            <div id="contenedor" style={{overflow: "hidden", marginLeft: "20%", marginRight: "20%", border: "solid #0a0a0a 5px",
             boxShadow: "8px 8px 10px 0px #818181", marginTop: "5%", borderRadius: "10px 10px 10px 10px", marginBottom:"30px"}}>    
                <FormularioR />
                </div> 
            
            
            </div>


        )

    }

}
export default NuevoRecurso