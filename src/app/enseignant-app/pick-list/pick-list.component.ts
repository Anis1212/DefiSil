import { Component, OnInit } from '@angular/core';

declare var $:JQueryStatic;

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  constructor() { }

//   val = [
//     {id: 01, text: 'Isis'},
//     {id: 02, text: 'Sophia'},
//     {id: 03, text: 'Alice'},
//     {id: 04, text: 'Isabella'},
//     {id: 05, text: 'Manuela'},
//     {id: 06, text: 'Laura'},
//     {id: 07, text: 'Luiza'},
//     {id: 08, text: 'Valentina'},
//     {id: 09, text: 'Giovanna'},
//     {id: 10, text: 'Maria Eduarda'},
//     {id: 11, text: 'Helena'},
//     {id: 12, text: 'Beatriz'},
//     {id: 13, text: 'Maria Luiza'},
//     {id: 14, text: 'Lara'},
//     {id: 15, text: 'Julia'}
// ];

  ngOnInit() {
    // var pick = $("#pickList").pickList({data: this.val});
    //
    // $("#getSelected").click(function () {
    //   console.log(pick.getValues());
    // });
  }

}
