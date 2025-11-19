import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HintService, HintPayload } from './hint.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hint.html',
  styleUrls: ['./hint.scss']
})
export class HintComponent implements OnDestroy {
  open = false;
  title = '';
  info = '';
  tech: string[] = [];
  extra = 'Adicionalmente contiene tiene este botón de ayuda flotante de la que explica un poco mas de detalle el funcionamiento de cada sección y las tecnologias utilizadas '; 
  private sub: Subscription;

  constructor(private router: Router, private hint: HintService) {
    this.sub = this.hint.hint$.subscribe((p: HintPayload | null) => {
      if (p) {
        this.title = p.title || '';
        this.info = p.text || '';
        this.tech = p.tech || [];
        this.extra = p.extra || ''; // si tu HintService envía `extra`
      } else {
        this.title = this.info = '';
        this.tech = [];
        this.extra = '';
      }
    });

    this.setInfoFromUrl(this.router.url);
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((ev: any) => {
      this.setInfoFromUrl(ev.urlAfterRedirects);
      // cerrar panel al navegar
      this.open = false;
    });
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  private setInfoFromUrl(url: string) {
    switch (true) {
      case url.includes('/about'):
        this.info = 'Aquí encontrarás una breve presentación profesional y enlaces a mis proyectos.';
        break;
      case url.includes('/education'):
        this.info = 'Detalles de mi formación académica y certificaciones.';
        break;
      case url.includes('/experience'):
        this.info = 'Resumen de cargos y proyectos relevantes donde trabajé.';
        break;
      case url.includes('/skills'):
        this.info = 'Lista de tecnologías y habilidades técnicas que manejo.';
        break;
      case url.includes('/contact'):
        this.info = 'Formas de contactarme: email y teléfono.';
        break;
      default:
        this.info = 'Sección del portafolio.';
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}