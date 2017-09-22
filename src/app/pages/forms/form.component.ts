import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
 // selector: 'app-root',
  templateUrl: './form.component.html' 
})
export class FormComponent {
    title = 'app test';
    @ViewChild('ngForm')
    ngForm1: NgForm;

    submit() {
        if (!this.ngForm1.form.valid) {
            alert("表单验证失败");
        }
    }
}
