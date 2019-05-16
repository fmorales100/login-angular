import { Component, OnInit } from '@angular/core';
import { Conector } from './conector';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  title = 'Listado de colegios de Pereira (Datos Abiertos)';
  loading: boolean;
  user = null;
  // UsersProperties = [];
  errorMessage: string;
  //selectedUser: User;
  buttonText = 'Consultar';

  constructor(
    private conector: Conector) { }

  ngOnInit() {
  }

  getRandomUser(): void {
    this.loading = true;
    this.workingData();
  }; //end getRandomUser



  properties = [];
  datos: string = '';
  workingData() {
    this.conector.getUserData().subscribe(
      data => {
      this.datos = data.data;
        /*this.properties = [
          {
             title: 'Tipo: ',
            value: data.data[0][8]
          }, {
            title: 'Institucion: ',
            value: data.data[0][9]
            
          }, {
            title: 'Vereda: ',
            value: data.data[0][10]
          },{
            title: 'Dirección: ',
            value: data.data[0][11]
          } ];

        this.loading = false;
        //console.log(this.datos, "loading is " + this.loading);
        //console.log(this.datos[0]);*/
      });

    //this.datos = JSON.parse(this.users);


    //console.log("DATA " + this.properties)
    //return this.properties;



  }

} // End export AppComponent