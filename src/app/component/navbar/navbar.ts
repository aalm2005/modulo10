import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // 👈 Importa el servicio

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // 🚨 CAMBIO AQUI: Inyecta AuthService y hazlo público para usarlo en el HTML
  constructor(private router: Router, public authService: AuthService) {}

  buscar(termino: string): void {
    termino = termino.trim();

    if (!termino) {
      // si viene vacío, solo muestra todos los personajes
      this.router.navigate(['/personajes']);
      return;
    }

    this.router.navigate(['/personajes'], {
      queryParams: { q: termino }
    });
  }
  
  // 🚨 NUEVO METODO: Cierra la sesión
  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir al login después de cerrar
  }
}