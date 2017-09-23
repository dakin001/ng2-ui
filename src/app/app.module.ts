import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { ALL_SERVICE } from './services/index';
import {
    All_PAGES
} from './pages/index';


@NgModule({
    declarations: [
        AppComponent,
        All_PAGES
    ],
    imports: [
        BrowserModule,
        FormsModule,       
        routing
    ],
    providers: [
        ALL_SERVICE
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


// ?
// require('./types/declare.d')
