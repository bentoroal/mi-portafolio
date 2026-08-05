// Servicio para obtener habilidades desde un endpoint público hecho en Express con Node.js

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

export type SkillGroup = { categoria: string; items: string[] };

// Datos locales de respaldo (plan B) — cargan de inmediato en el frontend
export const LOCAL_SKILLS: SkillGroup[] = [
  { categoria: 'Lenguajes', items: ['Python', 'Javascript', 'Typescript', 'Kotlin', 'Java'] },
  { categoria: 'Frameworks y Entornos', items: ['React', 'Django', 'Angular', 'Next', 'Node.js', 'Express', 'FastApi'] },
  { categoria: 'Bases de datos', items: ['MySQL', 'Postgres', 'MongoDB'] },
  { categoria: 'Desarrollo Web', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Redux'] },
  { categoria: 'Herramientas', items: ['Visual Studio Code', 'Android Studio', 'GitHub', 'AWS', 'Google Cloud', 'OCI', 'Docker'] },
  { categoria: 'Idiomas', items: ['Español (Nativo)', 'Inglés (Avanzado)'] }
];

//Clase injectable que maneja la obtención de habilidades desde un endpoint externo
@Injectable({ providedIn: 'root' })
export class SkillsService {
  private apiUrl = 'https://skills-api-spdq.onrender.com/api/skills'; // tu endpoint público

  constructor(private http: HttpClient) {}

  // Intenta obtener las skills desde la API con un timeout razonable.
  // No atrapamos el error aquí porque preferimos que el componente decida qué hacer (log, mostrar fallback, reintentar, etc.).
  fetchFromApi(timeoutMs = 3000): Observable<SkillGroup[]> {
    return this.http.get<SkillGroup[]>(this.apiUrl).pipe(timeout(timeoutMs));
  }

  // Mantendremos este método por compatibilidad; devuelve la API directamente.
  getSkills(): Observable<SkillGroup[]> {
    return this.http.get<SkillGroup[]>(this.apiUrl);
  }
}