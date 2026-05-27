import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonClaroComponent } from "../button-claro/button-claro";

interface CardItem {
  image: string;
  title: string;
  description: string;
  btnText: string;
  link?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ButtonClaroComponent],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChild('track', { static: true }) track!: ElementRef<HTMLDivElement>;

  // Tus datos estructurados
  cards: CardItem[] = [
    {
      image: '/assets/imagenes/desta1.png',
      title: 'Limpieza de Hogar',
      description: 'Hacemos la limpieza de tu hogar de manera eficiente y confiable',
      btnText: 'Reservar Espacio'
    },
    {
      image: '/assets/imagenes/desta2.png',
      title: 'Limpieza de oficinas',
      description: 'Hacemos la limpieza de tu oficina de manera eficiente y confiable',
      btnText: 'Reservar Espacio'
    },
    {
      image: '/assets/imagenes/desta3.png',
      title: 'Kit de Limpieza de Alfombras',
      description: 'Productos especializados para la limpieza de alfombras en tu hogar u oficina',
      btnText: 'Click para más información'
    }
    // {
    //   image: '/assets/imagenes/desta4.png',
    //   title: 'Bosques de Kioto',
    //   description: 'Un sendero de paz rodeado de naturaleza ancestral.',
    //   btnText: 'Explorar Destino'
    // }
  ];

  currentIndex = 0;
  private intervalId: any;
  private intervalTime = 3500;

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll(); // Evita fugas de memoria al destruir el componente
  }

  getVisibleCards(): number {
    const width = window.innerWidth;
    if (width <= 640) return 1;
    if (width <= 1024) return 2;
    return 3;
  }

  moveCarousel(): void {
    const visibleCards = this.getVisibleCards();
    const maxIndex = this.cards.length - visibleCards;

    this.currentIndex++;
    if (this.currentIndex > maxIndex) {
      this.currentIndex = 0;
    }

    this.updateTrackPosition();
  }

  updateTrackPosition(): void {
    const trackElement = this.track.nativeElement;
    const firstCard = trackElement.querySelector('.card');
    
    if (firstCard) {
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = 24; // Espaciado definido en el CSS
      const amountToMove = this.currentIndex * (cardWidth + gap);
      trackElement.style.transform = `translateX(-${amountToMove}px)`;
    }
  }

  // Controladores de eventos del mouse directos en la clase
  startAutoScroll(): void {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.moveCarousel(), this.intervalTime);
    }
  }

  stopAutoScroll(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Listener para recalcular si el usuario cambia el tamaño de la ventana
  @HostListener('window:resize')
  onResize(): void {
    this.currentIndex = 0;
    this.track.nativeElement.style.transform = `translateX(0px)`;
  }

  onBtnClick(card: CardItem): void {
    console.log('Acción ejecutada para:', card.title);
    // Aquí puedes redirigir o abrir un modal
  }

  onclick(card: CardItem): void {
    console.log('Acción ejecutada para un boton:', card.title);
  }

  onclick2(card: CardItem): void {
    console.log('Soy una oficina: xd ', card.title);
  }

  onCardAccioon(card: CardItem): void {
    switch (card.title) {
      case 'Limpieza de Hogar':
        this.onclick(card);
        break;
      case 'Limpieza de oficinas':
        this.onclick2(card);
        break;
      default:
        console.log('Acción no definida para:', card.title);
    }
  }



  

  
}