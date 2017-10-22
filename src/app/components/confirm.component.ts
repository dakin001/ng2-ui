import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { AlertService } from "../services/index";
import { AlertInfo, AlertType } from "../types/AlertInfo";
declare var $: any;

@Component({
    selector: 'x-confirm',
    templateUrl: './confirm.component.html'
})
export class ConfirmComponent {
    constructor(private el: ElementRef,
        private alertService: AlertService) {

        alertService.msgEvent.subscribe((x: AlertInfo) => {
            console.log(' alertService.msgEvent.subscribe');
            console.log(x);
            this.alertInfo = x;
            this.show();
        })
    }

    alertInfo: AlertInfo;

    $dialog: any;
    @Input()
    dialogTitle: string;
    dialogMsg: string;

    @Output() onOK = new EventEmitter<boolean>();
    @Output() onCanceled = new EventEmitter<boolean>();

    ngAfterViewInit() {
        //this.el.nativeElement
        this.$dialog = $(this.el.nativeElement.childNodes[1]);
    }

    show() {
        if (this.alertInfo.alertType == AlertType.Confirm) {
            this.dialogMsg = this.alertInfo.msg;

            let current = this;
            this.$dialog.modal({})

        }
    }
    ok() {
        this.onOK.emit(true);
        this.$dialog.modal('hide')

        if (this.alertInfo.callBack != undefined) {
            console.log(this.alertInfo.callBack);
            this.alertInfo.callBack(true)
        }
    }

    close() {
        this.onCanceled.emit();
        this.$dialog.modal('hide')

        console.log('close');
        if (this.alertInfo.callBack) {
            this.alertInfo.callBack(false)
        }
    }
}
