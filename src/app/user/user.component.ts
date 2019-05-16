import { Component, OnInit } from '@angular/core';
import { Conector } from './conector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'Listado de Usuarios';
  loading: boolean;
  user = null;
  // UsersProperties = [];
  errorMessage: string;
  //selectedUser: User;
  buttonText = 'Consultar';

  constructor(
   // private router: Router,
    private conector: Conector) { }

    ngOnInit() {
  }

  getRandomUser(): void {
    this.loading = true;


    this.workingData();



  } //end getRandomUser

  properties = [];
  datos: string = '';
  workingData() {
    this.conector.getUserData().subscribe(
      data => {
      this.user = data.results[0];
        this.properties = [
          {
             title: 'Nombre: ',
            value: this.user.name.first +' ' + this.user.name.last
          }, {
            title: 'Edad: ',
            value: this.user.dob.age
            
          }, {
            title: 'Ciudad: ',
            value: this.user.location.city +' ('+ this.user.location.state +')'
          },{
            title: 'Celular: ',
            value: this.user.cell
          }, {
            title: 'Teléfono: ',
            value: this.user.phone
          },  {
            title: 'Email: ',
            value: this.user.email
          } ];

        this.loading = false;
        //console.log(data, "loading is " + this.loading)
      })
      ;

    //this.datos = JSON.parse(this.users);


    //console.log("DATA " + this.properties)
    return this.properties;



  }

} // End export AppComponent