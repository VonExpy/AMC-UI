import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
@Component({
  selector: 'app-client-calendar',
  templateUrl: './client-calendar.component.html',
  styleUrls: ['./client-calendar.component.scss']
})
export class ClientCalendarComponent implements OnInit {
  // references the #calendar in the template
  // @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  Events = [];
  calendarOptions!: CalendarOptions
  constructor() { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      themeSystem: 'bootstrap',
      dateClick: this.onDateClick.bind(this),
      events: this.Events
    };
  }

  onDateClick(res: any) {
    console.log('Clicked on date : ' + res.dateStr)
  }

}
