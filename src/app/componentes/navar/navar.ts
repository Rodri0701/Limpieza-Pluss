import { Component, Input, OnInit } from '@angular/core'; 
import { RouterLink, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth';

@Component({
  selector: 'app-navar',
  imports: [RouterLink, CommonModule], 
  templateUrl: './navar.html',
  styleUrl: './navar.css',
  standalone: true,
})
  // ... (tus importaciones igual) ...

export class Navar implements OnInit { 
  isLoggedIn = false;
  userName = ''; 
  
  @Input() tipoAppContainer: string = "home";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    //console.log('🖥️ [Navbar] Inicializando Navbar y conectando antenas...');
    
    this.authService.isLoggedIn$.subscribe(status => {
     // console.log(`📻 [Navbar] Señal de LOGIN recibida. Estado: ${status}`);
      this.isLoggedIn = status;
    });

    this.authService.userName$.subscribe(name => {
     // console.log(`📻 [Navbar] Señal de NOMBRE recibida. Nombre: '${name}'`);
      this.userName = name;
    });
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
