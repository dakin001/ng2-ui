import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
 // selector: 'app-root',
  templateUrl: './form.component.html' 
})
export class FormComponent {
    title = 'app test';
    @ViewChild('ngForm1')
    ngForm1: NgForm;

    submit() {
        console.log(this.ngForm1);
        if (!this.ngForm1.form.valid) {
            alert("表单验证失败");
        }
    }
}
