import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private router: Router) {}

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
}
