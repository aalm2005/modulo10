import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

// ... decorador igual
export class RegistroComponent {

  constructor(private router: Router, private authService: AuthService) {}

  registro(form: any) {
    if (form.invalid) return;

    this.authService.registrar(form.value).subscribe({
      next: () => {
        alert('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Error al registrar usuario. Intenta de nuevo.');
      }
    });
  }
}