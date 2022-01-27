import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  nuevo: Personaje ={
    Nombre :"",
    Poder: 0
  }

  personajes: Personaje[] =[
    {
      Nombre : "Goku",
      Poder : 15000
    },
    {
      Nombre: "Vegeta",
      Poder: 7500
    }
  ]

  agregar(){

    if (this.nuevo.Nombre.trim().length == 0) {
      return;
    }

    const obj:Personaje = {
      Nombre: this.nuevo.Nombre,
      Poder: this.nuevo.Poder
    }

    this.personajes.push(obj);
    console.log(this.nuevo);

    this.nuevo.Nombre = "";
    this.nuevo.Poder = 0;
  }

}
