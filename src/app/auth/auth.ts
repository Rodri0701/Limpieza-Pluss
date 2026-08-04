import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  private currentUserName = new BehaviorSubject<string>('');
  userName$ = this.currentUserName.asObservable();

  constructor() {
   // console.log('🚀 [AuthService] Instanciado. ¿Estamos en el navegador?', isPlatformBrowser(this.platformId));
    this.checkToken();
  }

  checkToken() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const savedName = localStorage.getItem('userName'); 
      
    // console.log(`🔍 [AuthService] checkToken ejecutado. Token existe: ${!!token} | Nombre guardado: ${savedName}`);
      
      if (token) {
        this.loggedIn.next(true);
        this.currentUserName.next(savedName || 'Usuario');
      } else {
        this.loggedIn.next(false);
        this.currentUserName.next('');
      }
    }
  }

  login(token: string, name: string) {
   // console.log(`✅ [AuthService] Función login llamada. Guardando sesión para: ${name}`);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      localStorage.setItem('userName', name);
      
      this.loggedIn.next(true); 
      this.currentUserName.next(name); 
    }
  }

  logout() {
   // console.log('🚪 [AuthService] Función logout llamada. Borrando TODO el LocalStorage.');
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      
      this.loggedIn.next(false); 
      this.currentUserName.next(''); 
    }
  }
}