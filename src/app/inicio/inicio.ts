import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tarjetas } from "../tarjetas/tarjetas";
import { Navar } from "../navar/navar";
import { TarjetasInfo } from "../tarjetas-info/tarjetas-info";


@Component({
  selector: 'app-inicio',
  imports: [RouterLink, Tarjetas, Navar, TarjetasInfo],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
    
}
