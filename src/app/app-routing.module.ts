import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { DatosComponent } from './datos/datos.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  canActivate: [AuthGuard] }, 
  { path: 'login', component: LoginComponent },
  { path: 'test',component: TestComponent},
  { path: 'datos',component: DatosComponent},
  { path: 'user',component: UserComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
