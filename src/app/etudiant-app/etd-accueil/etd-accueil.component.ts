import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etd-accueil',
  templateUrl: './etd-accueil.component.html',
  styleUrls: ['./etd-accueil.component.css']
})
export class EtdAccueilComponent implements OnInit {

  jours:Array<any> = ["Samedi","Dimanche","Lundi","Mardi","Mercredi","Jeudi"]; 
  emplois:Array<any> = [];
  seance:any = new Object();
  emploi =
    {
	   "Groupe_SIL":{
			"1":[
				  {
					"module":"MOB",
					"enseignant":"A.Mostefai",
					"salle":"salle 10"
				          },
				  {
					"module":"MOB",
					"enseignant":"A.Mostefai",
					"salle":"salle 10"
				  },
				  {
					"module":"MOB",
					"enseignant":"A.Mostefai",
					"salle":"salle 10"
				  },
				  {
					"module":"TD ALOG",
					"enseignant":"M.Tolba",
					"salle":"salle 10"
				  },
				  {
					"module":"TD ALOG",
					"enseignant":"M.Tolba",
					"salle":"salle 10"
				  },
				  {
					"module":"TD QLOG",
					"enseignant":"C.Zakaria",
					"salle":"salle 10"
				  },
				  {
					"module":"TD QLOG",
					"enseignant":"C.Zakaria",
					"salle":"salle 10"
				  }
				  
			],
			"2":[
				  {
					"module":"ALOG",
					"enseignant":"K.Chbieb",
					"salle":"salle 10"
				          },
				  {
					"module":"ALOG",
					"enseignant":"K.Chbieb",
					"salle":"salle 10"
				  },
				  {
					"module":"IHM",
					"enseignant":"S.Bouzidi",
					"salle":"salle 10"
				  },
				  {
					"module":"MNGMT",
					"enseignant":"M.Admane",
					"salle":"salle 10"
				  },
				   {
					"module":"MNGMT",
					"enseignant":"M.Admane",
					"salle":"salle 10"
				  },
				  {
					"module":"TD IHM",
					"enseignant":"S.Bouzidi",
					"salle":"salle 10"
				  },
				  {
					"module":"Libre",
					"enseignant":"Libre",
					"salle":"Libre"
				  }
				  
			],
			"3":[
				  {
					"module":"SIG",
					"enseignant":"S.Ait Aoudia",
					"salle":"salle 10"
				          },
				  {
					"module":"SIG",
					"enseignant":"S.Ait Aoudia",
					"salle":"salle 10"
				  },
				  {
					"module":"SGBD",
					"enseignant":"S.Benkrid",
					"salle":"salle 10"
				  },
				  {
					"module":"SGBD",
					"enseignant":"S.Benkrid",
					"salle":"salle 10"
				  },
				  {
					"module":"Libre",
					"enseignant":"Libre",
					"salle":"Libre"
				  },
				  {
					"module":"Libre",
					"enseignant":"Libre",
					"salle":"Libre"
				  },
				  {
					"module":"Libre",
					"enseignant":"Libre",
					"salle":"Libre"
				  }
				  
			],
			"4":[
				  {
					"module":"IPLS",
					"enseignant":"Y.Challal",
					"salle":"salle 10"
				          },
				  {
					"module":"IPLS",
					"enseignant":"Y.Challal",
					"salle":"salle 10"
				  },
				  {
					"module":"Libre",
					"enseignant":"Libre",
					"salle":"Libre"
				  },
				  {
					"module":"PROJ",
					"enseignant":"All",
					"salle":"Visio"
				  },
				  {
					"module":"PROJ",
					"enseignant":"All",
					"salle":"Visio"
				  },
				  {
					"module":"PROJ",
					"enseignant":"All",
					"salle":"Visio"
				  },
				  {
					"module":"PROJ",
					"enseignant":"All",
					"salle":"Visio"
				  }
				  
			],
			"5":[
				  {
					"module":"Libre",
					"enseignant":"Libre",
					"salle":"Libre"
				  },
				  {
					"module":"QLOG",
					"enseignant":"C.Zakaria",
					"salle":"salle 15"
				  },
				  {
					"module":"QLOG",
					"enseignant":"C.Zakaria",
					"salle":"salle 15"
				  },
				  {
					"module":"TD SGBD",
					"enseignant":"S.Benkrid",
					"salle":"salle ME"
				  },
				  {
					"module":"TD SGBD",
					"enseignant":"S.Benkrid",
					"salle":"salle ME"
				  },
				  {
					"module":"IPLS",
					"enseignant":"Y.Challal",
					"salle":"salle ME"
				  },
				  {
					"module":"IPLS",
					"enseignant":"Y.Challal",
					"salle":"salle ME"
				  }
				  
			]
		}
	};
  constructor() { }

  ngOnInit() {
    console.log(this.emploi);
  }
  private item: string = '3';
  selectJour(select: any){
    this.emplois = this.emploi.Groupe_SIL[select.value];
  }

}
