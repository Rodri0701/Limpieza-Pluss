import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { Navar } from '../../componentes/navar/navar';

// 1. NUEVO: Importamos nuestro servicio de radio (ajusta la ruta según tu proyecto)
import { AuthService } from '../../auth/auth'; 

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

    constructor(
        private fb: FormBuilder, 
        private http: HttpClient, 
        private router: Router,
        // 2. NUEVO: Inyectamos el servicio
        private authService: AuthService 
    ) {
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

        const body = new HttpParams()
            .set('username', email)
            .set('password', password);

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        const url = 'http://127.0.0.1:8000/login';

        this.http.post(url, body.toString(), { headers }).subscribe({
            next: (response: any) => {
                this.loginSuccess = true; 
                this.isSubmitting = false;
                
                if(response.access_token) {
                    // Guardamos el rol para las rutas
                    let userRole = response.roll;
                    if (userRole) {
                        localStorage.setItem('userRole', userRole);
                    }

                        
                    const nombreUsuario = response.user; 

this.authService.login(response.access_token, nombreUsuario);
                    setTimeout(() => {
                        if (userRole === 'admin') {
                            this.router.navigate(['/admin']); 
                        } else {
                            this.router.navigate(['/inicio']); 
                        }
                    }, 1000);
                }
            },
            error: (err) => {
                console.error("Error al iniciar sesión:", err);
                this.isSubmitting = false;
                this.backendError = err.error?.detail || 'Correo o contraseña incorrectos. Intenta de nuevo.';
            }
        });
    }
}