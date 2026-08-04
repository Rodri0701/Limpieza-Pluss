import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; 
import {Router} from '@angular/router';
import { Navar } from '../../componentes/navar/navar';

@Component({
    selector: 'app-minimal',
    standalone: true, 
    imports: [Navar, ReactiveFormsModule, CommonModule],
    templateUrl: './login.html',
    styleUrl: './style.css',
})
export class Minimal {
    loginForm: FormGroup;
    showPassword = false;
    isSubmitting = false;
    loginSuccess = false;
    backendError = '';
  

    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            remember: [false],
            
        });
    }
    
    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;
        this.backendError = ''; 
        
        const { email, password } = this.loginForm.value;

        // --- EL CAMBIO CLAVE ESTÁ AQUÍ ---
        // 1. Convertimos a Form Data y mapeamos "email" a "username" (Lo que exige FastAPI)
        const body = new HttpParams()
            .set('username', email)
            .set('password', password);

        // 2. Le decimos a FastAPI que le estamos enviando un Formulario, no un JSON
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        const url = 'http://127.0.0.1:8000/login';

        // 3. Enviamos body.toString() y los headers
        this.http.post(url, body.toString(), { headers }).subscribe({
            next: (response: any) => {
               // console.log("Respuesta del servidor:", response);
                this.loginSuccess = true; 
                this.isSubmitting = false;
                
                // Si el backend te devuelve un token (ej. response.access_token), lo guardas así:
                if(response.access_token) {
                    localStorage.setItem('token', response.access_token);

                    let userRole = response.roll;
                    // console.log("Rol del usuario:", userRole);
                    if (userRole) {
                        localStorage.setItem('userRole', userRole);
                    }

                    setTimeout(() => {
                        // Redirigir a la página principal después de 2 segundos
                        if (userRole === 'admin') {
                            this.router.navigate(['/admin']); // Mandamos al Admin al dashboard
                        } else {
                            this.router.navigate(['/inicio']); // Mandamos a los demás a inicio
                        }
                    }, 1000);
                }
            },
            error: (err) => {
                console.error("Error al iniciar sesión:", err);
                this.isSubmitting = false;
                
                // FastAPI suele mandar los errores en err.error.detail
                this.backendError = err.error?.detail || 'Correo o contraseña incorrectos. Intenta de nuevo.';
            }
        });
    }
}