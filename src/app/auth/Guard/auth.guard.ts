import { inject, PLATFORM_ID } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common'; // <-- Importamos esta utilidad de Angular

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID); // <-- Inyectamos el ID de la plataforma

  // 1. Verificamos si el código se está ejecutando en el navegador
  if (isPlatformBrowser(platformId)) {
    // Aquí es seguro usar localStorage porque estamos en el navegador
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  }

  
  return false;
};