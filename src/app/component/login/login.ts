import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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

    this.authService.login(form.value).subscribe({
      next: (res: any) => {
        // 👇 AQUÍ ESTÁ LA LÓGICA DE ROLES
        if (res.rol === 'admin') {
            alert('Bienvenido admin');
        } else {
            alert(`Bienvenido ${res.usuario}`);
        }
        
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert('Error: Correo o contraseña incorrectos.');
      }
    });
  }
}