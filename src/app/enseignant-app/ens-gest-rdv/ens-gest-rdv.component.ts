import {Component, OnInit} from '@angular/core';
import {EnsServiceService} from "../../services/ens-service.service";
declare var $:JQueryStatic;


@Component({
  selector: 'app-ens-gest-rdv',
  templateUrl: './ens-gest-rdv.component.html',
  styleUrls: ['./ens-gest-rdv.component.css']
})
export class EnsGestRdvComponent implements OnInit {

  private ens_email = "ds_aktouche@esi.dz";
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
  private rdvLieu ='';
  private rdvMotif;
  private rdv_accepted = '1';
  private a = new Date();
  private dateRef = this.a.getDate()+'-'+(this.a.getMonth()+1)+'-'+this.a.getFullYear();

  private listeRdv = [];
  private rdvAccepte = [];
  private rdvRefuse = [];

  constructor(private ens_service : EnsServiceService) {

  }

  ngOnInit() {
    this.currentDate = this.ens_service.getCurrentDate();
    this.ens_service.getRendezVous(this.ens_email)
      .subscribe(
        (data) => {
          console.log(data.json());
          this.listeRdv = data.json();
          console.log(JSON.stringify(this.newEvents));
          console.log("rdv", this.listeRdv);
          this.done = true;
          this.listeRdv.forEach(rdv => {
            switch (rdv.Etat){
              case 'effectue':
                this.rdvAccepte.push(rdv);
                break;
              case 'refuse':
                this.rdvRefuse.push(rdv);
                break;
              default :
                this.rendezVous.push(rdv);
                break;
            }
          });
          console.log('hello', this.rendezVous);
        });
  }

  /**
   * Affiche les détails d'un rendez-vous donné de la liste des rendez-vous en attentes
   * @param rdvId
   * @param etudiant
   * @param motif
   * @param dateSoumission
   */
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

  /**
   * Affiche les détails d'un rendez-vous des listes des rendez-vous acceptés et refusés
   * @param rdvId
   * @param etudiant
   * @param motif
   * @param dateSoumission
   */
  detailsRdv(rdvId : number, etudiant : String, motif : String, dateSoumission : String){
    this.modifiable = false;
    this.rdvLieu = '';
    this.rdvId = rdvId;
    this.etudiant_email = etudiant;
    this.motif = motif;
    this.date_soumission = dateSoumission;
  }

  /**
   * Met à jour l'état d'un rendez-vous soit en le mettant dans la liste des rendez-vous acceptés ou bien dans la liste
   * des rendez-vous refusés
   */
  changerEtatRdv(){
    switch (this.rdv_accepted){
      case '1' :
        // this.rendezVous[this.rdvId].id = this.rdvId;
        console.log('date', this.dateRef.replace(/-/g , ""));
        console.log('dateRef', this.rdvDate.replace(/-/g , ""));
        if (this.dateRef.replace(/-/g , "") > this.rdvDate.replace(/-/g , "")){
          console.log('kdim');
        }else{
          console.log('jdid');
        }
        if (!this.rdvAccepte.includes(this.rendezVous[this.rdvId]) && this.rdvLieu != '' && (this.dateRef.replace(/-/g , "") < this.rdvDate.replace(/-/g , ""))){
          this.rendezVous[this.rdvId].Etat = 'effectue';
          this.rendezVous[this.rdvId].Date = this.rdvDate;
          this.rendezVous[this.rdvId].Lieu = this.rdvLieu;
          this.rdvAccepte.push(this.rendezVous[this.rdvId]);
          if (this.rdvRefuse.includes(this.rendezVous[this.rdvId])){
            console.log('exist', this.rdvAccepte[this.rdvAccepte.length-1]);
            this.rdvRefuse.splice(this.rdvRefuse.indexOf(this.rdvAccepte[this.rdvAccepte.length-1]),1);
          }else{
            console.log('does not exist');
          }
          this.ens_service.updateRdv(this.rendezVous[this.rdvId].id, this.rendezVous[this.rdvId])
            .subscribe(
              (data) =>{
                console.log(data);
              }
            );
          this.rendezVous.splice(this.rendezVous.indexOf(this.rdvAccepte[this.rdvAccepte.length-1]),1);
          this.modifiable = false;
        }
        break;
      case '2' :
        this.rendezVous[this.rdvId].Etat = 'refuse';
        this.rendezVous[this.rdvId].Motif = this.rdvMotif;
        //this.rendezVous[this.rdvId].id = this.rdvId;
        if (!this.rdvRefuse.includes(this.rendezVous[this.rdvId])) {
          this.rdvRefuse.push(this.rendezVous[this.rdvId]);
          if (this.rdvAccepte.includes(this.rendezVous[this.rdvId])) {
            console.log('exist', this.rdvRefuse[this.rdvRefuse.length - 1]);
            this.rdvAccepte.splice(this.rdvAccepte.indexOf(this.rdvRefuse[this.rdvRefuse.length-1]), 1);
          } else {
            console.log('does not exist');
          }
          this.ens_service.updateRdv(this.rendezVous[this.rdvId].id, this.rendezVous[this.rdvId])
            .subscribe(
              (data) =>{
                console.log(data);
              }
            );
          this.rendezVous.splice(this.rendezVous.indexOf(this.rdvRefuse[this.rdvRefuse.length-1]), 1);
          this.modifiable = false;
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

  /**
   * Récupère la date choisie dans
   * @param date
   */
  onChangeDate(date){
    this.rdvDate = date.value.getDate()+'-'+(date.value.getMonth()+1)+'-'+date.value.getFullYear();
  }
}
