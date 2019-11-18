import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import {  } from "../../node_modules/sweetalert/dist/sweetalert.css";
import SweetAlert from 'sweetalert-react'
import moment from "moment";

require("moment/locale/es.js");
const localizer = momentLocalizer(moment)

export default class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      evento: '',
      fecha_inicio: '',
      fecha_fin: ''
    }
  }
  
  clicEvento(evento){
    this.setState(
      {
        show: true, 
        evento: evento.title, 
        fecha_inicio:evento.start, 
        fecha_fin: evento.end
      }
    )
  }

  textAlerta(fecha_inicio, fecha_fin){
    return `Inicio: ${fecha_inicio}
            Fin: ${fecha_fin}`
  }
  /**
   * {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
   * start: Wed Nov 06 2019 00:00:00 GMT-0600 (hora estándar central), 
   * end: Wed Nov 13 2019 00:00:00 GMT-0600 (hora estándar central)}
   * onSelectEvent={event => alert(event.start)}
   */
  render() {
    return (
      <div style={{height:`${400}px`}} className="bigCalendar-container">
        <Calendar className={'calendario'}
          onSelectEvent={event => this.clicEvento(event)}
          localizer={localizer}
          events={this.props.programacion}
          startAccessor="start"
          endAccessor="end"
          selectable = {true}
          messages={{
            next: "sig",
            previous: "ant",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día"
          }}
        />
        <SweetAlert
          show={this.state.show}
          title={this.state.evento}
          text= {this.textAlerta(this.state.fecha_inicio, this.state.fecha_fin)}
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}