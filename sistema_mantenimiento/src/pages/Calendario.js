import React from "react"
import CalendarComponent from "../components/Calendar"
import Topbar from '../components/Topbar'
import Titulo from '../components/Titulo'
import Calendarioco from '../images/calendario.png'
import "../components/styles/calendar.css"
import eventos from "../eventos"

export default class Calendario extends React.Component{
    /**
     * Pasarle por medio de el prop programacion los eventos de la api
     * En este momento carga los eventos del archivo eventos.js
     * Siguiendo una estructura parecida a esta (puede tener menos valores)
     *  {
            id: 0, 
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2015, 3, 0),
            end: new Date(2015, 3, 1),
        }
        Informacion del objeto Date en js => https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
     */
    render() {
        return (
            <div>
                <Topbar />
                <Titulo titulo="Calendario" icono={Calendarioco} />
                <div className='container calendario'>
                    <div className='row'>
                        <CalendarComponent programacion={eventos}/>
                    </div>
                </div>
            </div>
        );
    }
}