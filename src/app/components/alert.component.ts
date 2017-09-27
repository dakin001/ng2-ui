import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html' 
})
export class AlertComponent {
    @Input()
    private shown: boolean = false;
}
