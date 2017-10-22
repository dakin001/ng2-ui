import { Component, Input, ElementRef, trigger, animate, transition, state, style } from '@angular/core';
import { AlertService } from "../services/index";
import { AlertInfo, AlertType } from "../types/AlertInfo";
declare var $: any;

@Component({
    selector: 'x-alert-list',
    templateUrl: './alert-list.component.html',

    animations: [
        trigger('showHide', [
            state('show', style({
                opacity: '1'
            })),
            state('hide', style({
                opacity: '0'
            })),
            transition('hide => show', animate('100ms ease-in')),
            transition('show => hide', animate('100ms ease-out'))
        ])
    ]
})
export class AlertListComponent {
    constructor(private el: ElementRef,
        private alertService: AlertService) {
        alertService.msgEvent.subscribe((x: AlertInfo) => {
            if (x.alertType == AlertType.Confirm) {
                return;
            }
            this._addToAlertList(x);
        })
    }

    AlertInfoList: Array<AlertInfo> = [];

    ngAfterViewInit() {
        //this.el.nativeElement
        //this.$html = $(this.el.nativeElement.childNodes[1]);
    }

    _addToAlertList(alert: any) {
        // this.AlertInfoList.push(alert);
        alert.isShow = 'show'
        this.AlertInfoList.splice(0, 0, alert);
        if (this.AlertInfoList.length > 5) {
            this.AlertInfoList.splice(4, 1);
        }

        setTimeout(() => {
            alert.isShow = 'hide';
        }, 1500)
    }

    getAlertStyleClass(alert) {
        switch (alert.alertType) {
            case AlertType.Info:
                return "alert-info";
            case AlertType.Warrning:
                return "alert-warning";
            case AlertType.Error:
                return "alert-danger";
            //case AlertType.Success:
            //    return "alert-success";
        }

        return "";
    }
}
