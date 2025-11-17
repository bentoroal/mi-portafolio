// Servicio para obtener habilidades desde un endpoint público hecho en Express con Node.js

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type SkillGroup = { categoria: string; items: string[] };

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private apiUrl = 'https://skills-api.onrender.com/api/skills'; // tu endpoint público

  constructor(private http: HttpClient) {}

  getSkills(): Observable<SkillGroup[]> {
    return this.http.get<SkillGroup[]>(this.apiUrl);
  }
}