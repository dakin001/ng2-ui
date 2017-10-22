export enum AlertType {
    Info,
    Warrning,
    Error,
    Confirm
}

export class AlertInfo {
    alertType: AlertType;
    msg: string;
    callBack: any;
}
