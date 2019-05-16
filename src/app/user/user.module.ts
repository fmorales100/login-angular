import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { UserComponent }  from './user.component';
import { Conector }      from './conector'; //servicio propio


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Conector],
  bootstrap: [UserComponent]
})
export class UserModule { }