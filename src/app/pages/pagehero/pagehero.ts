import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pagehero',
  imports: [RouterLink],
  templateUrl: './pagehero.html',
  styleUrl: './pagehero.css',
})
export class Pagehero {

  name ='Roy';
  age = 26;

  MostrarNombre(){
    alert(this.name);
  }
  MostrarEdad(){
    alert(this.age);
  }
}
