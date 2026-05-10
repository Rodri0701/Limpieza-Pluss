import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tarjetas } from "../tarjetas/tarjetas";

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, Tarjetas],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
    
}
