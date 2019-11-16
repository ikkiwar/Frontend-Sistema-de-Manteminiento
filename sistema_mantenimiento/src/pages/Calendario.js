import React from "react";
import CalendarComponent from "../components/Calendar";
import Topbar from '../components/Topbar';
import Titulo from '../components/Titulo';
import Home from '../images/casa.png';
import "../components/styles/calendar.css";
export default class Calendario extends React.Component{
    render() {
        return (
            <div>
                <Topbar />
                <Titulo titulo="Calendario" icono={Home} />
                <div className='container calendario'>
                    <div className='row'>
                        <CalendarComponent/>
                    </div>
                </div>
            </div>
        );
    }
}