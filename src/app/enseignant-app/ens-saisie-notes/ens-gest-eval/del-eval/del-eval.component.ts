import {Component, Input, OnInit} from '@angular/core';
import {EnsServiceService} from "../../../../services/ens-service.service";

@Component({
  selector: 'app-del-eval',
  templateUrl: './del-eval.component.html',
  styleUrls: ['./del-eval.component.css']
})
export class DelEvalComponent implements OnInit {
  @Input() pereData : any;
  private evaluations = [];
  private eval = [];

  constructor(private ens_service : EnsServiceService) {
    this.ens_service.node$.subscribe(n => {
      console.log('service', n);
      if (n != ''){
        this.eval = n;
        this.evaluations = this.eval;
        console.log('evaluation ', this.evaluations);
      }

    });
  }

  ngOnInit() {
    this.evaluations = this.ens_service.getEvalValues();
  }

}
