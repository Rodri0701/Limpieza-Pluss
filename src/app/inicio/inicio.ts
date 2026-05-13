import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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
  @ViewChild('carrusel') carrusel!: ElementRef;

ngAfterViewInit(){

    setInterval(() => {

        this.carrusel.nativeElement.scrollBy({

            left: 350,

            behavior: 'smooth'

        });

    }, 3000);

}
    
}
