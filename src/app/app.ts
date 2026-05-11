import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { Navar } from "./navar/navar";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Navar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Limpieza-Pluss');
}
