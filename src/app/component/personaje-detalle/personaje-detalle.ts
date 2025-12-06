import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';              // 👈 NUEVO
import { ActivatedRoute } from '@angular/router';
import { PersonajesServices, Personajes } from '../../app.services';

@Component({
  selector: 'app-personaje-detalle',
  standalone: true,                                          // 👈 asegúrate de tener esto
  imports: [CommonModule],                                   // 👈 AQUÍ va CommonModule
  templateUrl: './personaje-detalle.html',
  styleUrls: ['./personaje-detalle.css']
})
export class PersonajeDetalleComponent {

  personaje!: Personajes;  // el que vamos a mostrar

  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajesServices
  ) {
    const idx = Number(this.route.snapshot.paramMap.get('id'));
    this.personaje = this.personajesService.getPersonajeByIndex(idx);
  }
}
