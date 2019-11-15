import React from "react";
import Calendar from 'react-calendar'
import Topbar from '../components/Topbar';
import Titulo from '../components/Titulo';
import Home from '../images/casa.png';
import Orden from '../images/expediente.png';
export default class CalendarComponent extends React.Component{
    render() {
        return (
            <div>
                <Topbar />
                <div><Titulo titulo="Inicio" icono={Home} />
                </div>
                <Calendar/>
            </div>
        );
    }
}