import { Component } from '@angular/core';
import { Navar } from "../navar/navar";
import { Productos } from "../productos/productos";

@Component({
  selector: 'app-productos-page',
  imports: [Navar, Productos],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
})
export class ProductosPage {}
