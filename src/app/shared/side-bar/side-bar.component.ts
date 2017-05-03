import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
declare var $:JQueryStatic;


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  // @ViewChild('.nav li') el:ElementRef;

  ngOnInit() {

  }

  ngAfterViewInit() {
    // $(this.el.nativeElement).chosen().
    //   on('click', (e, args) => {
    //
    //   });
    console.log($('.nav li'));
  }

  clique(a : any){
    $('.nav li').removeClass("active");
    // console.log(a.path[2]);
    // console.log(a.path[1]);
    // console.log(a.path);
    // console.log(a);
  }



}
