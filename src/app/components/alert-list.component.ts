import { Component, Input, ElementRef, trigger, animate, transition, state, style } from '@angular/core';
import { AlertService } from "../services/index";
import { AlertInfo, AlertType } from "../types/AlertInfo";
declare var $: any;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'x-alert-list',
    templateUrl: './alert-list.component.html',

    animations: [  // 测试未通过
        trigger('showHide', [
            state('show', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('hide', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
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
    $html: any;

    ngAfterViewInit() {
        //this.el.nativeElement
        this.$html = $(this.el.nativeElement.childNodes[1]);
    }

    _addToAlertList(alert: any) {
        this.AlertInfoList.push(alert);
        if (this.AlertInfoList.length > 5) {
           this.AlertInfoList.splice(0, 1);
        }

        setTimeout(() => {
            alert.isShow = 'hide';
        }, 1000)
    }

    alert() {
        window.document.body.appendChild(this.$html[0]); ///需要测试。

        this.$html.alert()
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
