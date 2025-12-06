import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.html',
  styleUrl: './directiva.css',
})
export class Directiva {
  mostrar: boolean = true;
  autor: string = 'Flash';
  mensaje: string = 'a veces solo tienes que reducir la velocidad, para saber a donde quieres ir';
  personajes: string[] = ['Flash', 'Superman', 'Batman', 'Mujer Maravilla', 'Linterna Verde'];
}
