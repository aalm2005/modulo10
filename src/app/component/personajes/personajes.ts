import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonajesServices, Personajes as PersonajeModel } from '../../app.services';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.html',
  styleUrls: ['./personajes.css'],
  providers: [PersonajesServices],
})
export class PersonajesComponent {

  personajes: PersonajeModel[] = [];           // lista que se muestra (filtrada)
  personajesOriginal: PersonajeModel[] = [];   // copia completa sin filtro

  constructor(
    private _personajesServices: PersonajesServices,
    private router: Router,
    private route: ActivatedRoute              // 👈 para leer ?q= del buscador
  ) {}

  ngOnInit(): void {
    // cargamos TODOS los personajes del servicio
    this.personajesOriginal = this._personajesServices.getPersonaje();
    this.personajes = this.personajesOriginal;

    // nos suscribimos a los query params (?q=...)
    this.route.queryParams.subscribe(params => {
      const termino = (params['q'] || '').toLowerCase();
      this.aplicarFiltro(termino);
    });
  }

  // filtra por nombre o casa
  aplicarFiltro(termino: string): void {
    if (!termino) {
      this.personajes = this.personajesOriginal;
      return;
    }

    this.personajes = this.personajesOriginal.filter(p =>
      p.nombre.toLowerCase().includes(termino) ||
      p.casa.toLowerCase().includes(termino)
    );
  }

  // ahora recibe el personaje, no el índice
  verPersonaje(personaje: PersonajeModel): void {
    const idx = this.personajesOriginal.indexOf(personaje);
    if (idx >= 0) {
      this.router.navigate(['/personaje', idx]);
    }
  }
}
