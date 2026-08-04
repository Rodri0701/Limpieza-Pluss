import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  
  // Este es nuestro "radio transmisor". Empieza en 'false' por defecto.
  private loggedIn = new BehaviorSubject<boolean>(false);
  
  // Esta es la antena donde los componentes escucharán
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {
    this.checkToken();
  }

  // Verifica si hay token al recargar la página (protegido para SSR)
  checkToken() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this.loggedIn.next(!!token); // true si hay token, false si no
    }
  }

  // Llama a esto cuando el usuario inicie sesión
  login(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      this.loggedIn.next(true); // ¡Avisa que ya entró!
    }
  }

  // Llama a esto cuando el usuario cierre sesión
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      this.loggedIn.next(false); // ¡Avisa que ya salió!
    }
  }
}