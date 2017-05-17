
import { Observable } from 'rxjs/Rx';
import { ModifRdvComponent } from './modif-rdv.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class ModifRdvService {

    constructor(private dialog: MdDialog) { }

    public modifRdvDialog(enseignant:string,motif:string): Observable<boolean> {

        let dialogRef: MdDialogRef<ModifRdvComponent>;
        
        dialogRef = this.dialog.open(ModifRdvComponent);
        dialogRef.componentInstance.rdvEmited.enseignant = enseignant;
        dialogRef.componentInstance.rdvEmited.motif = motif;
        return dialogRef.afterClosed();
    }

}