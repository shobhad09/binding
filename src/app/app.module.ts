import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {empcomp} from '../employee/emp.app';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    empcomp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
  empcomp]
})
export class AppModule { }
