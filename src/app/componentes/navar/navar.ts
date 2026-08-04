// 1. Agregamos OnInit aquí
import { Component, Input, OnInit } from '@angular/core'; 

// 2. Cambiamos 'Route' por 'Router' (que es el que usas en el constructor)
import { RouterLink, Router, RouterModule } from '@angular/router'; 

import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth';

@Component({
  selector: 'app-navar',
  imports: [RouterLink, CommonModule], // RouterLink y CommonModule están perfectos aquí
  templateUrl: './navar.html',
  styleUrl: './navar.css',
  standalone: true,
})
// 3. Le decimos a la clase que implemente OnInit
export class Navar implements OnInit { 
  isLoggedIn = false;
  
  @Input() tipoAppContainer: string = "home";

  // Ahora sí, Angular sabe qué es Router
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Escuchamos la señal de radio en tiempo real
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
