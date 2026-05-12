import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navar } from "../navar/navar";
import { TarjetasInfo } from "../tarjetas-info/tarjetas-info";

@Component({
  selector: 'app-nosotros',
  imports: [Navar, RouterLink, TarjetasInfo],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
 // Para mostrar los servicios en la página "Nosotros", puedes definir un array de objetos que representen cada servicio. Cada objeto puede contener información relevante sobre el servicio, como el título, la descripción y la imagen asociada. Luego, puedes utilizar esta información para generar dinámicamente las tarjetas de servicios en el template HTML.
 // Aquí tienes un ejemplo de cómo podrías definir el array de servicios en la clase del componente "Nosotros":

  servicios = [
    {
    titulo: 'Limpieza de Hogar',
    descripcion: 'Ofrecemos servicios de limpieza de hogar para mantener tu espacio limpio y ordenado. Nuestro equipo de profesionales se encargará de limpiar cada rincón de tu casa, desde la sala hasta los baños, utilizando productos de alta calidad y técnicas eficientes.',
    imagen: 'assets/imagenes/limpiaHogar.png',
    pieDePagina: '¡Haz tu hogar brillar con nuestro servicio de limpieza de hogar!'
  },
  {
    titulo: 'Limpieza de Oficinas',
    descripcion: 'Mantenemos tu espacio de trabajo limpio y profesional con nuestro servicio de limpieza de oficinas. Nos encargamos de limpiar escritorios, áreas comunes, baños y más, para que puedas concentrarte en tu trabajo sin preocuparte por la limpieza.',
    imagen: 'assets/imagenes/limpiaHogar2.png',
    pieDePagina: '¡Crea un ambiente de trabajo saludable con nuestro servicio de limpieza de oficinas!'
  }
  
]
}
