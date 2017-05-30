import { Component, OnInit, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AjoutRdvService } from "./ajout-rdv/ajout-rdv.service";
import { ModifRdvService } from "./modif-rdv/modif-rdv.service";
import { RendezVous } from "../Classes/Rendez-vous";
import { SuppRdvService } from "./supp-rdv/supp-rdv.service";
import { EtdNotificationComponent } from "../etd-notification/etd-notification.component";
import { NotifRdvService } from "../etd-notification/notif-rdv.service";
import { EtdRendezVousService } from "./etd-rendez-vous.service";
import { METADATA } from "../METADATA";
@Component({
  selector: 'app-etd-rendez-vous',
  entryComponents: [EtdNotificationComponent],
  templateUrl: './etd-rendez-vous.component.html',
  styleUrls: ['./etd-rendez-vous.component.css']
})
export class EtdRendezVousComponent {

   public resultat: any;
   etats= [
        {"name":"Demandé"},
        {"name":"Accepté"},
        {"name":"Annulé"},
     ];


     
   public rdvDemande = [];
   public rdvShow = [];
   index : any;
   public rdvProgramme = [];
   public rdvAnnule = [];
   rdvAll = [];
   public result:any;
   userName:String = localStorage.getItem("userEmail");
   public rdvReceived : RendezVous;
   public notif:Boolean = false;
   public message:string;

  constructor(private adddialogsService: AjoutRdvService,private editdialogsService: ModifRdvService,
  private deletedialogsService: SuppRdvService,private notifRdvService:NotifRdvService,
  private etudiantRendezVousService:EtdRendezVousService) { }
  
  public openAddDialog() {
    this.adddialogsService
      .ajoutRdvDialog("","")
      .subscribe(
        res => {
        this.resultat = res; 
        this.rdvDemande.push({
             "Enseignant":this.resultat.Enseignant,
             "Motif":this.resultat.Motif
        });
        this.etudiantRendezVousService.AddRdv(
          {
          Etudiant:localStorage.getItem("userEmail"),  
          Enseignant:this.resultat.Enseignant,
          Motif:this.resultat.Motif,
          Etat:"demande",
          Date:"NULL",
          Lieu:"NULL",
          DateSoumission: this.getCurrentDate()
        }
          )
        .subscribe(
             data => this.result = data
         );
         this.showNotif("Rendez-vous Demandé ! veuillez attendre la validation de votre enseignant");
         //this.openNotifDialog();
    });
  }

  /*public openNotifDialog() {
    this.notifRdvService
       .NotifDialog()
      .subscribe(
        res => {
        this.resultat = res;  
    });
  }*/

  getCurrentDate(){
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  return  d.getFullYear()+ '-' +
    (month<10 ? '0' : '') + month + '-'
    +(day<10 ? '0' : '') + day;
}

  showNotif(message:string): void {
   this.notif = true;
   this.message= message;
   setTimeout(function() {
       this.notif = false;
   }.bind(this), 2000);
  }

  public openEditDialog(event:number) {
    
    this.editdialogsService
      .modifRdvDialog(this.rdvDemande[event].Enseignant,this.rdvDemande[event].Motif)
      .subscribe(
        res => {
        console.log(res);  
        this.resultat = res;
        this.rdvDemande[event]= {
           "Enseignant":this.resultat.Enseignant,
            "Motif":this.resultat.Motif,
        };
      this.showNotif("Rendez-vous Modifié ! veuillez attendre la validation de votre enseignant");
    });
  }

    public openDeleteDialog(event:number) {

    /*this.deletedialogsService
      .suppRdvDialog()
      .subscribe(
        res => {              
        this.resultat = res;
    });*/
    this.rdvDemande.splice(event,1);
    this.showNotif("Rendez-vous Supprimmé !");
  }

  ngOnInit() {
        this.etudiantRendezVousService.getRdv(this.userName,"&etat=demande")
         .subscribe(
             data => this.rdvDemande = data
         );
         this.etudiantRendezVousService.getRdv(this.userName,"&etat=effectue")
         .subscribe(
             data => {
               this.rdvProgramme = data;
               console.log(this.rdvProgramme);
              }
         );
         this.etudiantRendezVousService.getRdv(this.userName,"&etat=refuse")
         .subscribe(
             data => this.rdvAnnule = data
         );

    }

    selectEtat($event:any){
       if($event.index == 0){
             this.etudiantRendezVousService.getRdv(this.userName,"&etat=demande")
         .subscribe(
             data => this.rdvDemande = data
         ); 
            this.rdvShow = this.rdvDemande; 
       } else if($event.index==1){
          this.etudiantRendezVousService.getRdv(this.userName,"&etat=effectue")
         .subscribe(
             data => this.rdvProgramme = data
         );
         this.rdvShow = this.rdvProgramme;
       } else {
         this.etudiantRendezVousService.getRdv(this.userName,"&etat=refuse")
         .subscribe(
             data => this.rdvAnnule = data
         );
         this.rdvShow = this.rdvAnnule;
        }
    }


}
