import { Component, OnInit, ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AjoutRdvService } from "./ajout-rdv/ajout-rdv.service";
import { ModifRdvService } from "./modif-rdv/modif-rdv.service";
import { RendezVous } from "../Classes/Rendez-vous";
import { SuppRdvService } from "./supp-rdv/supp-rdv.service";
import { EtdNotificationComponent } from "../etd-notification/etd-notification.component";
import { NotifRdvService } from "../etd-notification/notif-rdv.service";
import { EtdRendezVousService } from "./etd-rendez-vous.service";
@Component({
  selector: 'app-etd-rendez-vous',
  entryComponents: [EtdNotificationComponent],
  templateUrl: './etd-rendez-vous.component.html',
  styleUrls: ['./etd-rendez-vous.component.css']
})
export class EtdRendezVousComponent {

   public resultat: any;
   rdvDemande = [];
   index : any;
   rdvProgramme = [];
   rdvAnnule = [];
   rdvAll = [];
   public result:any;
   public user:string = "dr_benounnas@esi.dz";
   public rdvReceived : RendezVous;
   public notif:Boolean = false;
   public message:string;

  constructor(private adddialogsService: AjoutRdvService,private editdialogsService: ModifRdvService,
  private deletedialogsService: SuppRdvService,private notifRdvService:NotifRdvService,
  private etudiantRendezVousService:EtdRendezVousService) { }
  
  public openAddDialog() {
    this.adddialogsService
      .ajoutRdvDialog()
      .subscribe(
        res => {
        this.resultat = res;  
        this.rdvDemande.push({
           "Enseignant":this.resultat.enseignant,
            "Motif":this.resultat.motif,
        });
        this.etudiantRendezVousService.AddRdv(this.resultat.enseignant,this.user,this.resultat.motif)
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
  showNotif(message:string): void {
   this.notif = true;
   this.message= message;
   setTimeout(function() {
       this.notif = false;
       console.log(this.edited);
   }.bind(this), 2000);
  }

  public openEditDialog(event:number) {
    
    this.editdialogsService
      .modifRdvDialog(this.rdvDemande[event].Enseignant,this.rdvDemande[event].Motif)
      .subscribe(
        res => {
        this.resultat = res;
        this.rdvDemande[event]= {
           "Enseignant":this.resultat.enseignant,
            "Motif":this.resultat.motif,
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
        this.etudiantRendezVousService.getRdv(this.user,"&etat=demande")
         .subscribe(
             data => this.rdvDemande = data
         );
         this.etudiantRendezVousService.getRdv(this.user,"&etat=programme")
         .subscribe(
             data => this.rdvProgramme = data
         );
         this.etudiantRendezVousService.getRdv(this.user,"&etat=annule")
         .subscribe(
             data => this.rdvAnnule = data
         );

    }

    /*receive(event){
      this.rdvReceived = event;
      console.log(event);
    }*/


}
