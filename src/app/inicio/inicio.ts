import {Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tarjetas } from '../tarjetas/tarjetas';


import { isPlatformBrowser } from '@angular/common';
import { Navar } from '../navar/navar';
import { TarjetasInfo } from '../tarjetas-info/tarjetas-info';

@Component({
  selector: 'app-inicio',
  imports: [Tarjetas, RouterLink, Navar, TarjetasInfo],
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