import { Component } from '@angular/core';
import { Navar } from "././../../componentes/navar/navar";
import { Productos } from "././../../componentes/productos/productos";
import { CarouselComponent } from "././../../componentes/carousel/carousel";

@Component({
  selector: 'app-productos-page',
  imports: [Navar, Productos, CarouselComponent],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
})
export class ProductosPage {}
