import { Component, Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';
declare var $: any;
import { PopoverComponent } from './popover.component';

@Directive({
    selector: '[popover]'
})
export class PopoverDirective implements OnInit {
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
    }

    visible: boolean = false;

    @Input('popover')
    popover: PopoverComponent;

    @HostListener("click")
    toggle() {
        if (!this.visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    @HostListener("mouseover")
    show() {
        console.log(this.popover);

        $(this.el.nativeElement).popover({
            title: this.popover.title,
            content: this.popover.content,
            html: true,
        }).popover('show');
    }
    @HostListener("mouseout")
    hide() {
        $(this.el.nativeElement).popover('hide');
    }
}
