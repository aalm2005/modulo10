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
        // ✅ PASO CLAVE: Guardar el token y el rol en localStorage.
        // Asumimos que la respuesta del backend (res) contiene 'token' y 'rol'.
        const token = res.token;
        const role = res.rol;
        
        this.authService.setLoginStatus(token, role); 
        
        // 👇 Lógica de Roles (usando la variable 'role')
        if (role === 'admin') {
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