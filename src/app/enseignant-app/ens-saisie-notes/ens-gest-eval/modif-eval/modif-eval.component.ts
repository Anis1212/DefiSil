import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {EnsServiceService} from "../../../../services/ens-service.service";

@Component({
  selector: 'app-modif-eval',
  templateUrl: './modif-eval.component.html',
  styleUrls: ['./modif-eval.component.css']
})
export class ModifEvalComponent implements OnInit, OnChanges {

  @Input() pereData : any;
  private evaluations = [];

  constructor(private ens_service : EnsServiceService) {
    this.ens_service.node$.subscribe(n => {
      console.log('test', n);
      this.evaluations = n;
    });
  }

  ngOnInit() {
    this.evaluations = this.ens_service.getEvalValues();
    //this.evaluations = this.ens_service.dataSaisieNote;
    // this.ens_service.getEvalModule(this.pereData)
    //   .subscribe(
    //     (data) => {
    //       this.evaluations = data.json();
    //       console.log(data.json());
    //     }
    //   );

  }

  ngOnChanges(changes : SimpleChanges){
    console.log('hello', this.pereData);
  }

}
