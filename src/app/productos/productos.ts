import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navar } from '../navar/navar';

@Component({
  selector: 'app-productos',
  imports: [Navar, CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  
  @Input() titulo: string = '';

  @Input() descripcion: string = '';

  @Input() precio: string = '';

  @Input() sku: string = '';

  @Input() imagen1: string = '';

  @Input() imagen2: string = '';

  @Input() imagen3: string = '';

  cantidad: number = 1;

  aumentarCantidad() {

    if (this.cantidad < 10) {

      this.cantidad++;

    }

  }

  disminuirCantidad() {

    if (this.cantidad > 1) {

      this.cantidad--;

    }

  }

}
