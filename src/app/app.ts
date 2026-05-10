import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pagehero } from "./pagehero/pagehero";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pagehero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Limpieza-Pluss');
}
