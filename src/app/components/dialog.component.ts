import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
    selector: 'x-dialog',
    templateUrl: './dialog.component.html'
})
export class DialogComponent {
    constructor(private el: ElementRef) {
    }

    $dialog: any;
    @Input()
    dialogTitle: string;
    @Output() onOK = new EventEmitter<boolean>();
    @Output() onCanceled = new EventEmitter<boolean>();

    ngAfterViewInit() {
        //this.el.nativeElement
        this.$dialog = $(this.el.nativeElement.childNodes[1]);
    }

    show() {
        this.$dialog.modal({})
    }
    ok() {
        this.onOK.emit(true);
        this.close();
    }
    close() {
        this.onCanceled.emit();
        this.$dialog.modal('hide')
    }
}
