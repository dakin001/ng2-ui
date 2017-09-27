import { Component, Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';
declare var $: any;

@Directive({
    selector: '[data-toggle="tooltip"]'
})
export class TooltipDirective implements OnInit {
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        $(this.el.nativeElement).tooltip()          
    }

}
