import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagecounter',
  imports: [RouterLink],
  templateUrl: './pagecounter.html',
  styleUrl: './pagecounter.css',
})
export class Pagecounter {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  multiply(factor: number) {
    this.count *= factor;
  }

  reset() {
    this.count = 0;
  }

  divide(divisor: number) {
    if (divisor !== 0) {
      this.count /= divisor;
    } else {
      alert('No se puede dividir por cero');
    }
  }

  
}
