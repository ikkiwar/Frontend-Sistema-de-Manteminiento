import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";

require("moment/locale/es.js");
const localizer = momentLocalizer(moment)

export default class CalendarComponent extends Component {
  render() {
    return (
    <div style={{height:`${400}px`}} className="bigCalendar-container">
      <Calendar
        localizer={localizer}
        events={this.props.programacion}
        startAccessor="start"
        endAccessor="end"
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día"
        }}
        />
    </div>
    );
  }
}