import { Component } from '@angular/core';

@Component({
  selector: 'app-pagehero',
  imports: [],
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
