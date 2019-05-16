import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { DatosComponent }  from './datos.component';
import { Conector }      from './conector'; //servicio propio

@NgModule({
  declarations: [
    DatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Conector],
  bootstrap: [DatosComponent]
})
export class DatosModule { }