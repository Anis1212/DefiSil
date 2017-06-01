import {Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
declare var $:JQueryStatic;


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  private currentUrl;
  // @ViewChild('.nav li') el:ElementRef;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.currentUrl = this.document.location.href.split("/");
    console.log(this.currentUrl);
    this.currentUrl = this.currentUrl[this.currentUrl.length-1];
  }

  ngOnInit() {
    // $(document).ready(function(){
    //   $('#side-bar li').click(function () {
    //     $('#side-bar li').removeClass("active");
    //     $(this).addClass("active");
    //   })
    // });


  }

}
