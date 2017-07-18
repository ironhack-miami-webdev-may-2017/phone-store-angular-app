import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import {Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';
import { PhoneService } from './phone.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    NewPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
