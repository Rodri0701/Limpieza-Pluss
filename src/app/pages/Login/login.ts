import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    // Inyectamos FormBuilder para crear el formulario fácilmente
    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            // [valor inicial, [validaciones]]
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            remember: [false]
        });
    }

    // Método para alternar la vista de la contraseña
    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    // Método que se ejecuta al hacer Submit
    onSubmit() {
        // Si el formulario es inválido, marcamos los campos para que muestren el error
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;
        
        // Extraemos los valores ya validados
        const { email, password } = this.loginForm.value;

        // --- AQUÍ IRÍA TU LLAMADA AL BACKEND EN PYTHON (HTTP CLIENT) ---
        
        // Simulación temporal:
        setTimeout(() => {
            console.log("Datos listos para enviar:", { email, password });
            this.loginSuccess = true; // Esto ocultará el form y mostrará el mensaje de éxito
            this.isSubmitting = false;
        }, 1500);
    }
}