import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'popover',
    templateUrl: './Popover.component.html'
})
export class PopoverComponent implements OnInit {
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        jQuery(this.el.nativeElement).popover();
        jQuery('.popover').popover();
        jQuery('[data-toggle="popover"]').popover()

    }
}
