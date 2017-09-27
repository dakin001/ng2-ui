import { Component, Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';
declare var $: any;

@Component({
    selector: 'popover',
    templateUrl: './popover.component.html',
    styles: ['popover {display:none}']
})
export class PopoverComponent implements OnInit {
    constructor(private el: ElementRef) {

    }
    ngOnInit() {
    }

    @Input()
    title: string;
    @Input()
    content: string;

    getContent() {
        this.content = $(this.el.nativeElement).html();
        return this.content;
    }
}

