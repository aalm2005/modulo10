import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }

  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciales);
  }

  // ✅ NUEVO: Guarda el token al iniciar sesión (usado en login.ts)
  setLoginStatus(token: string, role: string) {
    localStorage.setItem('user_token', token);
    localStorage.setItem('user_role', role); 
  }

  // ✅ NUEVO: Verifica si hay token (usado en navbar.html)
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user_token'); 
  }

  // ✅ NUEVO: Elimina el token al cerrar sesión (usado en navbar.ts)
  logout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_role');
  }
}