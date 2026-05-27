import {Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tarjetas } from '../../componentes/tarjetas/tarjetas';


import { isPlatformBrowser } from '@angular/common';
import { Navar } from '../../componentes/navar/navar';
import { TarjetasInfo } from '../../componentes/tarjetas-info/tarjetas-info';
import { CarouselComponent } from "../../componentes/carousel/carousel";

@Component({
  selector: 'app-inicio',
  imports: [Tarjetas, RouterLink, Navar, TarjetasInfo, CarouselComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements AfterViewInit {

  platformId = inject(PLATFORM_ID);

  @ViewChild('carrusel', { read: ElementRef })
  carrusel!: ElementRef;

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {

      setTimeout(() => {

        setInterval(() => {

          const elemento = this.carrusel.nativeElement as HTMLElement;

          const final =
            elemento.scrollLeft + elemento.clientWidth >= elemento.scrollWidth;

          if (final) {

            elemento.scrollTo({
              left: 0,
              behavior: 'smooth'
            });

          } else {

            elemento.scrollLeft += 300;

          }

        }, 3000);

      });

    }
  }
}