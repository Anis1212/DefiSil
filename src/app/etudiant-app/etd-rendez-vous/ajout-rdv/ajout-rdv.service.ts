
import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './ajout-rdv.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Http, Response }  from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class AjoutRdvService {

    constructor(private dialog: MdDialog ) { }

    public ajoutRdvDialog(): Observable<boolean> {

        let dialogRef: MdDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);
        return dialogRef.afterClosed();
    }




}