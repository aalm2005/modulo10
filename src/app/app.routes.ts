import { Routes, RouterModule } from '@angular/router';

// Importa los componentes existentes
import { Home } from './component/home/home'; 
import { tarea1 } from './component/tarea1/tarea1';
import { Info } from './component/info/info';
import { Directiva } from './component/directiva/directiva';
import { PersonajesComponent } from './component/personajes/personajes';
import { PersonajeDetalleComponent } from './component/personaje-detalle/personaje-detalle';

// 👇 IMPORTA LOS NUEVOS COMPONENTES AQUÍ
import { LoginComponent } from './component/login/login';
import { RegistroComponent } from './component/registro/registro';

export const routes: Routes = [
  { path: 'home',      component: Home },
  { path: 'directiva', component: Directiva },
  { path: 'info',      component: Info },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeDetalleComponent },
  
  // 👇 AGREGA ESTAS RUTAS
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: '', component: Home, pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);