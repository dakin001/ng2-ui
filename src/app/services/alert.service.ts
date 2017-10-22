import { Injectable, EventEmitter } from '@angular/core';
import { AlertInfo, AlertType } from "../types/AlertInfo";

@Injectable()
export class AlertService {

    msgEvent = new EventEmitter<AlertInfo>();

    info(msg) {

    }

    error(msg) {

    }

    confirm(msg): Promise<boolean> {
        var alert = new AlertInfo();
        alert.alertType = AlertType.Confirm;
        alert.msg = msg;

        return new Promise((resolve, reject) => {
            alert.callBack = (ret) => resolve(ret);
            this.msgEvent.emit(alert)
        });
    }
}
