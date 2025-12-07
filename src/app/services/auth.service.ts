import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // La URL de tu backend

  constructor(private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciales);
  }

  // ============== Lógica de Autenticación de Estado (AÑADIDO) ==============

  // Guarda un indicador de sesión (token) y el rol en el navegador.
  setLoginStatus(token: string, role: string) {
    localStorage.setItem('user_token', token);
    localStorage.setItem('user_role', role); // Guardamos el rol para futuras verificaciones
  }

  // Verifica si existe el indicador de sesión.
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user_token'); // Devuelve true si el token existe
  }

  // Cierra la sesión eliminando los indicadores.
  logout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_role');
  }
}