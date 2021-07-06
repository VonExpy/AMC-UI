import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-client-calendar',
  templateUrl: './client-calendar.component.html',
  styleUrls: ['./client-calendar.component.scss']
})
export class ClientCalendarComponent implements OnInit {
  Events = [];
  calendarOptions!: CalendarOptions;
  constructor() { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.Events
    };
  }

  onDateClick(res:any) {
    console.log('Clicked on date : ' + res.dateStr)
  }

}
