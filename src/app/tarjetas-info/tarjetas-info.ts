import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjetas-info',
  imports: [CommonModule],
  templateUrl: './tarjetas-info.html',
  styleUrl: './tarjetas-info.css',
})
export class TarjetasInfo {
  //  Para que un compoenente reciba datos, se deben definir propiedades en la clase del componente. Estas propiedades pueden ser de cualquier tipo, como string, number, boolean, objetos, etc. Luego, estas propiedades pueden ser utilizadas en el template HTML del componente para mostrar la información o para realizar operaciones.

  //  Por ejemplo, si queremos que el componente "TarjetasInfo" reciba un título y una descripción, podemos definir dos propiedades en la clase del componente:
  @Input() tipoTarjeta: string = 'default'; // Puedes asignar un valor predeterminado si lo deseas
  // En este ejemplo, hemos definido una propiedad "tipoTarjeta" que puede recibir un valor desde el componente padre. El decorador @Input() indica que esta propiedad es una entrada que puede ser vinculada desde el componente padre.
  @Input() titulo: string = 'Título de la tarjeta';
  @Input() descripcion: string = 'Descripción de la tarjeta';
  @Input() imagen: string = 'ruta-de-la-imagen.jpg';
  @Input() pieDePagina: string = 'Pie de página de la tarjeta';

  //  En este ejemplo, hemos definido tres propiedades: "titulo", "descripcion" e "imagen". Estas propiedades están decoradas con el decorador @Input(), lo que indica que pueden recibir valores desde el componente padre.

  //  Luego, en el template HTML del componente, podemos utilizar estas propiedades para mostrar la información:

  //  <div class="tarjeta">
  //    <img [src]="imagen" alt="Imagen de la tarjeta">
  //    <h2>{{ titulo }}</h2>
  //    <p>{{ descripcion }}</p>
  //    <span class="pie-de-pagina">{{ pieDePagina }}</span>
  //  </div>

  //  En este ejemplo, estamos utilizando la propiedad "imagen" para establecer la fuente de la imagen, y las propiedades "titulo" y "descripcion" para mostrar el título y la descripción de la tarjeta.

}
