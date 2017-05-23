import {Component, OnInit} from '@angular/core';
import {EnsServiceService} from "../../services/ens-service.service";
import {DOCUMENT} from "@angular/platform-browser";
declare var $:JQueryStatic;


@Component({
  selector: 'app-ens-gest-rdv',
  templateUrl: './ens-gest-rdv.component.html',
  styleUrls: ['./ens-gest-rdv.component.css']
})
export class EnsGestRdvComponent implements OnInit {

  private ens_email = "k_chebieb@esi.dz"
  private rendezVous = [];
  private done : Boolean = false;
  private modifiable : Boolean = false;
  private currentDate;
  private newEvents = [];
  private motif;
  private etudiant_email;
  private date_soumission;
  private rdvId;
  private rdvDate;
  private rdvLieu;
  private rdvMotif;
  private rdv_accepted = '1';

  private rdvAccepte = [];
  private rdvRefuse = [];

  constructor(private ens_service : EnsServiceService) {

  }

  ngOnInit() {
    // this.newEvents = [
    //   {
    //     id: 1,
    //     title: 'name a',
    //     start: '2017-05-20T09:00',
    //     end: '2017-05-20T11:00'
    //   },
    //   {
    //     id: 2,
    //     title: 'name b',
    //     start: '2017-05-20T12:00',
    //     end: '2017-05-20T13:00'
    //   },
    //   {
    //     id: 3,
    //     title: 'name c',
    //     start: '2017-05-20T14:00',
    //     end: '2017-05-20T16:00'
    //   }
    // ];
    this.currentDate = this.ens_service.getCurrentDate();
    this.ens_service.getRendezVous(this.ens_email)
      .subscribe(
        (data) => {
          console.log(data.json());
          this.rendezVous = data.json();
          console.log(JSON.stringify(this.newEvents));
          console.log("rdv", this.rendezVous);
          this.done = true;
          this.rendezVous.forEach(rdv => {
            switch (rdv.Etat){
              case 'Accepte':
                this.rdvAccepte.push(rdv);
                this.rendezVous.splice(rdv,1);
                break;
              case 'Refuse':
                this.rdvRefuse.push(rdv);
                this.rendezVous.splice(rdv,1);
                break;
              default :
                break;
            }
          });
          console.log('hello', this.rendezVous);


          // $(document).ready(function () {
          //   setTimeout(()=>{
          //       // console.log("100ms after ngAfterViewInit ");
          //     alert(this.newEents);
          //     }, 100);
          //
          //   $('#myCalendar').fullCalendar('addEventSource', this.newEvents);
          // });


        });
    //this.calendarOptions.events = this.newEvents;
    // $("#calend").fullCalendar('renderEvents', this.newEvents , true );
    // $("#divTest").fullCalendar('renderEvents', this.newEvents , true );

    // setTimeout(()=>{
    //   console.log(this.calendarOptions);
    //   this.calendarOptions.events = this.newEvents;
    //   //$('#calend').fullCalendar('destroy');
    //   // $('#calend').fullCalendar('render');
    //   // $('#calend').fullCalendar('addEventSource', this.newEvents);
    //
    //   // $('#calend').fullCalendar('rerenderEvents');
    //   // $('#calend').fullCalendar( 'refetchResources' );
    //   // $('#calend').fullCalendar(this.calendarOptions);
    //   console.log("he");
    // }, 5000);

  }

  afficherDetailsRdv(rdvId : number, etudiant : String, motif : String, dateSoumission : String){
    this.modifiable = true;
    this.rdvLieu = '';
    this.rdvId = rdvId;
    this.etudiant_email = etudiant;
    this.motif = motif;
    this.date_soumission = dateSoumission;
    this.rdv_accepted = '1';
    var d = new Date();
    this.rdvDate = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    // console.log(this.currentDate.getDate());
    console.log(this.currentDate);
    // this.rdvDate = this.currentDate.getDate()+'/'+(this.currentDate.getMonth()+1)+'/'+this.currentDate.getFullYear();
    console.log('date', this.rdvDate);
  }

  detailsRdv(rdvId : number, etudiant : String, motif : String, dateSoumission : String){
    this.modifiable = false;
    this.rdvLieu = '';
    this.rdvId = rdvId;
    this.etudiant_email = etudiant;
    this.motif = motif;
    this.date_soumission = dateSoumission;
  }

  changerEtatRdv(){
    switch (this.rdv_accepted){
      case '1' :
        this.rendezVous[this.rdvId].Etat = 'Accepté';
        this.rendezVous[this.rdvId].Date = this.rdvDate;
        this.rendezVous[this.rdvId].Lieu = this.rdvLieu;
        this.rendezVous[this.rdvId].id = this.rdvId;
        if (!this.rdvAccepte.includes(this.rendezVous[this.rdvId])){
          this.rdvAccepte.push(this.rendezVous[this.rdvId]);
          if (this.rdvRefuse.includes(this.rendezVous[this.rdvId])){
            console.log('exist', this.rdvAccepte[this.rdvAccepte.length-1]);
            this.rdvRefuse.splice(this.rdvRefuse.indexOf(this.rdvAccepte[this.rdvAccepte.length-1]),1);
          }else{
            console.log('does not exist');
          }
          this.rendezVous.splice(this.rendezVous.indexOf(this.rdvAccepte[this.rdvAccepte.length-1]),1);
        }
        break;
      case '2' :
        this.rendezVous[this.rdvId].Etat = 'Refusé';
        this.rendezVous[this.rdvId].Motif = this.rdvMotif;
        this.rendezVous[this.rdvId].id = this.rdvId;
        if (!this.rdvRefuse.includes(this.rendezVous[this.rdvId])) {
          this.rdvRefuse.push(this.rendezVous[this.rdvId]);
          if (this.rdvAccepte.includes(this.rendezVous[this.rdvId])) {
            console.log('exist', this.rdvRefuse[this.rdvRefuse.length - 1]);
            this.rdvAccepte.splice(this.rdvAccepte.indexOf(this.rdvRefuse[this.rdvRefuse.length-1]), 1);
          } else {
            console.log('does not exist');
          }
          this.rendezVous.splice(this.rendezVous.indexOf(this.rdvRefuse[this.rdvRefuse.length-1]), 1);
        }
        break;
      default:
        break;
    }

    console.log(this.rendezVous);
    console.log('accepted',this.rdvAccepte);
    console.log('canceled',this.rdvRefuse);
    // this.ens_service.updateRdv(this.rendezVous[this.rdvId].id, this.rendezVous[this.rdvId])
    //   .subscribe(
    //     (data) =>{
    //       console.log(data);
    //     }
    //   );
    console.log(this.rdvId);
    console.log(this.rendezVous[this.rdvId]);
    console.log(this.rdv_accepted);
    console.log(this.rdvDate);
    console.log(this.rdvLieu);
  }

  onChangeDate(date){
    this.rdvDate = date.value.getDate()+'-'+(date.value.getMonth()+1)+'-'+date.value.getFullYear();
  }
}
