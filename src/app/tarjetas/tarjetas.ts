import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tarjetas',
  imports: [],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css',
})
export class Tarjetas {

   @Input() titulo: string = '';

  @Input() descripcion: string = '';

  @Input() precio: number = 0;

  comprar() {
    alert('Seguimos trabajando en esta función');
  }


}
