import { Component, Input, ElementRef } from '@angular/core';
import { AlertService } from "../services/index";
import { AlertInfo, AlertType } from "../types/AlertInfo";
declare var $: any;

@Component({
    selector: 'x-alert-list',
    templateUrl: './alert-list.component.html'
})
export class AlertListComponent {
    constructor(private el: ElementRef,
        private alertService: AlertService) {
        alertService.msgEvent.subscribe((x: AlertInfo) => {
            this.AlertInfoList.push(x);
           // this.alert();
        })
    }

    AlertInfoList: Array<AlertInfo> = [];
    $html: any;

    ngAfterViewInit() {
        //this.el.nativeElement
        this.$html = $(this.el.nativeElement.childNodes[1]);
    }



    alert() {
        window.document.body.appendChild(this.$html[0]); ///需要测试。

        this.$html.alert()
    }

    getAlertStyleClass(alertType: AlertType) {
        switch (alertType)
        {
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
