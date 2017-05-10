import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-ens-gest-rdv',
  templateUrl: './ens-gest-rdv.component.html',
  styleUrls: ['./ens-gest-rdv.component.css']
})
export class EnsGestRdvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calendarOptions:Object = {
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
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2017-05-01'
          },
          {
            title: 'Long Event',
            start: '2017-05-03',
            end: '2017-05-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-05-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-04-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2017-04-11',
            end: '2017-05-13'
          },
          {
            title: 'Meeting',
            start: '2017-05-12T10:30:00',
            end: '2017-05-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2017-05-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2017-05-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2017-05-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2017-05-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2017-05-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-05-28'
          }
        ],
           eventClick: function(calEvent, jsEvent, view) {

        alert('Event: ' + calEvent.title);
    }

     }

}
