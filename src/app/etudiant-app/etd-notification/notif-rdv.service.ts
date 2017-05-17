import { Injectable } from '@angular/core';
import { EtdNotificationComponent } from "./etd-notification.component";
import { MdDialogRef, MdDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NotifRdvService {

constructor(private dialog: MdDialog) { }

    public NotifDialog(): Observable<boolean> {

        let dialogRef: MdDialogRef<EtdNotificationComponent>;
        
        dialogRef = this.dialog.open(EtdNotificationComponent);
        return dialogRef.afterClosed();
    }
}