import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; // ✅ PASO 1: Importar CommonModule

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
      RouterLink, 
      CommonModule // ✅ PASO 2: Añadirlo al array imports para habilitar *ngIf
  ],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar {
  
  constructor(
    private router: Router, 
    public authService: AuthService
  ) {}

  buscar(termino: string): void {
    termino = termino.trim();

    if (!termino) {
      this.router.navigate(['/personajes']);
      return;
    }

    this.router.navigate(['/personajes'], {
      queryParams: { q: termino }
    });
  }
  
  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}