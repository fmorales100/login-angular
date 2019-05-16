import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I'
    })
  ],
  declarations: [ HomeComponent],
  bootstrap:    [ HomeComponent ]
})
export class HomeModule { }