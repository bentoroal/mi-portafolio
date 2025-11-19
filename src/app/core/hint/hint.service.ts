import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface HintPayload {
  title?: string;
  text?: string;
  tech?: string[];
  extra?: string; 
}

@Injectable({ providedIn: 'root' })
export class HintService {
  private _hint$ = new BehaviorSubject<HintPayload | null>(null);
  hint$ = this._hint$.asObservable();
  setHint(payload: HintPayload | null) { this._hint$.next(payload); }
}