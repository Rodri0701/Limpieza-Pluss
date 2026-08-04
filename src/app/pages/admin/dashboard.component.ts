import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importa tu servicio
import { AuthService } from '../../auth/auth'; 
import { Navar } from '../../componentes/navar/navar';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, Navar],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
     private     router: Router
    // 2. Inyéctalo en el constructor
    constructor(private authService: AuthService, router: Router) {
        this.router = router;  
        }

    // 3. Usa el método centralizado
    logout() {
        this.authService.logout(); 
        this.router.navigate(['/login']);
    }
}