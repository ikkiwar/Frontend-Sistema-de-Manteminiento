import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";

require("moment/locale/es.js");
const localizer = momentLocalizer(moment)
//array de eventos
const myEventsList= [{
  title: "today",
  start: new Date('2019-05-05 10:22:00'),
  end: new Date('2019-05-05 10:42:00')
},
{
  title: "string",
  start: new Date('2019-05-05 12:22:00'),
  end: new Date('2019-05-05 13:42:00')
}]

export default class CalendarComponent extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <div style={{height:`${400}px`}} className="bigCalendar-container">
      <Calendar
        localizer={localizer}
        events={myEventsList}
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