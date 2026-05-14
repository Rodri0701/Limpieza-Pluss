import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarjetas',
  imports: [CommonModule],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css',
})
export class Tarjetas {

  @Input() tipoTarjeta: string = 'default';

  @Input() titulo: string = '';
  @Input() imagen: string = '';
  @Input() descripcion: string = '';

  @Input() precio: number = 0;

  comprar() {
    alert('Seguimos trabajando en esta función');
  }

  agregarAlCarrito() {
    alert('Seguimos trabajando en esta función del carrito');
  }

  clickEnTarjeta() {
    alert('Seguimos trabajando en esta función');
  }


}
