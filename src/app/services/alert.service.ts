import { Injectable, EventEmitter } from '@angular/core';
import { AlertInfo, AlertType } from "../types/AlertInfo";

@Injectable()
export class AlertService {

    msgEvent = new EventEmitter<AlertInfo>();

    _alert(msg: string, alertType: AlertType) {
        var alert = new AlertInfo();
        alert.alertType = alertType;
        alert.msg = msg;

        this.msgEvent.emit(alert)
    }


    info(msg) {
        this._alert(msg, AlertType.Info);
    }

    error(msg) {
        this._alert(msg, AlertType.Error);
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
