import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ["Ironman","Spiderman","Thor","Hulk","Capitan America"]
  heroeBorrado: string = "";

  borrarHeroe(){
    console.log("Borrando...");
    const borrado = this.heroes.shift();
    this.heroeBorrado = borrado || "";
  }

}