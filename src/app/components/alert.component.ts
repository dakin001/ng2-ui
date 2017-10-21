import { Component, Input, ElementRef } from '@angular/core';
declare var $: any;

@Component({
    selector: 'x-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {
    constructor(private el: ElementRef) {
    }

    @Input()
    private shown: boolean = false;
    $html: any;

    ngAfterViewInit() {
        //this.el.nativeElement
        this.$html = $(this.el.nativeElement.childNodes[1]);
    }

    alert() {
        window.document.body.appendChild(this.$html[0]); ///需要测试。

        this.$html.alert()
    }

    close() {
        this.$html.alert('close')
    }
}
