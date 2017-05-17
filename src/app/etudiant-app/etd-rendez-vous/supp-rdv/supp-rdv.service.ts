import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { SuppRdvComponent } from "./supp-rdv.component";

@Injectable()
export class SuppRdvService {
    constructor(private dialog: MdDialog) { }

    public suppRdvDialog(): Observable<boolean> {

        let dialogRef: MdDialogRef<SuppRdvComponent>;
        
        dialogRef = this.dialog.open(SuppRdvComponent);
        return dialogRef.afterClosed();
    }

}