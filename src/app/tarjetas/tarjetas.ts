import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarjetas',
  imports: [CommonModule],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css',
})
export class Tarjetas {

  @Input() titulo: string = '';

  @Input() descripcion: string = '';

  @Input() precioActual: string = '';

  @Input() precioAnterior: string = '';

  @Input() imagen1: string = '';

  @Input() imagen2: string = '';

  comprar() {
    alert('Seguimos trabajando en esta función');
  }

  agregarAlCarrito() {
    alert('Seguimos trabajando en esta función del carrito');
  }

  clickEnTarjeta() {
    alert('Seguimos trabajando en esta función');
  }
  agregarAFavs(){
    alert('Seguimos trabajando en esta función de favoritos');
  }


}
