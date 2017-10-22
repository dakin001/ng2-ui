import { Component } from '@angular/core';
import { AlertService } from '../../services/index';


@Component({
    // selector: 'app-root',
    templateUrl: './demo.component.html'
})
export class DemoComponent {
    constructor(private alertService: AlertService) {
    }

    dialog1OK(e) {
        console.log(e);
    }

    showConfirm() {
        this.alertService.confirm("Test confirm: do you wanna delete it?").then((dialogResult) => {
            console.log("dialogResult:" + dialogResult);
        })
    }

    addAlertInfo() {
        this.alertService.info("this is alert info test ");
    }

    addAlertError() {
        this.alertService.error("this is alert error test ");
    }
}
