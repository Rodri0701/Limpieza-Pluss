import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-claro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="btn-claro" (click)="handleClick($event)">
      {{ label() }}
    </button>
  `,
  styles: [`
    .btn-claro {
      display: block;
      width: 100%;
      padding: 15px;
      background: #ffffff;
      color: #4f46e5; /* Color del texto a juego con tu acento */
      border: 1px solid rgba(79, 70, 229, 0.2);
      border-radius: 14px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
      transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .btn-claro:hover {
      background: #f8fafc;
      border-color: #4f46e5;
      color: #4338ca;
      box-shadow: 0 6px 20px rgba(79, 70, 229, 0.1);
      transform: translateY(-1px);
    }

    .btn-claro:active {
      transform: scale(0.98);
    }
  `]
})
export class ButtonClaroComponent {
  // Nueva sintaxis de Angular basada en Signals (Input obligatorio)
  label = input.required<string>();
  
  // Nuevo formato para emitir eventos al padre
  btnClick = output<void>();

  handleClick(event: Event): void {
    event.stopPropagation(); // Evita que el click afecte al auto-scroll del carrusel
    this.btnClick.emit();
  }
  carritoCompra(): void {
    
  }
}