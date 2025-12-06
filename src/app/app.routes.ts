import { Routes, RouterModule } from '@angular/router';

// 👇 nombres y rutas que SÍ existen en tu proyecto
import { Home } from './component/home/home';   // src/app/component/home/home.ts
import { tarea1 } from './component/tarea1/tarea1';                // src/app/tarea1/tarea1.ts
import { Info } from './component/info/info';
import { Directiva } from './component/directiva/directiva';
import { PersonajesComponent } from './component/personajes/personajes';
       import { PersonajeDetalleComponent } from './component/personaje-detalle/personaje-detalle';                                            // (ajusta el nombre si tu clase se llama distinto)

export const routes: Routes = [
  { path: 'home',      component: Home },
  { path: 'directiva', component: Directiva },   // o el componente que tú quieras aquí
  { path: 'info',      component: Info },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeDetalleComponent },
  { path: '', component: Home, pathMatch: 'full' }, // ruta por defecto
  { path: '**', redirectTo: 'home' } // ruta de fallback
];

export const APP_ROUTING = RouterModule.forRoot(routes);
