import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Asegura la ruta correcta

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {}

  login(form: any) {
    if (form.invalid) return;

    // Conectar al servicio SQL
    this.authService.login(form.value).subscribe({
      next: (respuesta) => {
        // CONFIRMACIÓN DE ÉXITO 👇
        alert(`¡Login exitoso! Bienvenido ${respuesta.usuario}`);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        // CONFIRMACIÓN DE ERROR 👇
        alert('Error: Correo o contraseña incorrectos');
        console.error(error);
      }
    });
  }
}