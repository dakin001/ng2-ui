import { Component, ElementRef } from '@angular/core';
declare var $: any;

@Component({
    selector: 'dialog',
    templateUrl: './dialog.component.html'
})
export class DialogComponent   {
    constructor(private el: ElementRef) {

    }

    ngAfterViewInit() {
        //$(this.el.nativeElement).modal({
        //})
    }
}
