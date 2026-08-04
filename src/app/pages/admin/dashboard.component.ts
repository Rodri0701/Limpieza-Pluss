import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navar } from '../../componentes/navar/navar'; // Ajusta la ruta si es necesario

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, Navar],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    
    constructor(private router: Router) {}

    // Método vital: Cerrar sesión
    logout() {
        // 1. Borramos el token de la "memoria" del navegador
        localStorage.removeItem('token');
        
        // 2. Lo mandamos de regreso al login
        this.router.navigate(['/login']);
    }
}