import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.css']
})
export class MyCalendarComponent implements OnInit {

  @Input() evn : any;
  calendarOptions : Object;

  constructor() {
    this.calendarOptions = {
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: (new Date()),
      editable: true,
      locale: 'fr',
      firstDay: 7,
      eventColor: '#e74c3c',
      header:
        {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },

      buttonText:
        {
          today:    "aujourd'hui",
          month:    'mois',
          week:     'semaine',
          day:      'jour',
          list:     'liste'
        },
      eventLimit: true,
      events: this.evn
    };
  }


  ngOnInit() {
  }

}
