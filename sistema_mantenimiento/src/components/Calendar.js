import React from "react";
import Calendar from 'react-calendar'

export default class CalendarComponent extends React.Component{
    state ={
        date: new Date(),
    }

    render() {
        return (
            <div>
                <Calendar/> 
            </div>
        );
    }
}