import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navar } from "../navar/navar";

@Component({
  selector: 'app-nosotros',
  imports: [Navar, RouterLink],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {}
