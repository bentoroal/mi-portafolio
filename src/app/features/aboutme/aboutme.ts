import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme.html',
  styleUrls: ['./aboutme.scss']  
})
export class AboutMeComponent implements OnInit, OnDestroy {
  usuario = {
    nombre: 'Benjamin Toro Alvarado',
    presentacion: 'Desarrollador Full Stack con experiencia en diversas herramientas IT.',
    fotoUrl: 'https://i.imgur.com/lZOVbeG.png',
    habilidades: ['Python', 'Javascript', 'Typescript', 'Django', 'Angular', 'Expo', 'React', 'Kotlin', 'Android Studio', 'Node.js', 'HTML', 'CSS'],
    expLaboral: [
      'Practica Profdesional:Desarrollador Full Stack en Proyecto web y movil tipo Uber en ISAMAX (2025)'
    ],
    email: 'ben.toroal@gmail.com',
    telefono: '+569 54899794'
  }

  constructor(private hint: HintService) {}

  ngOnInit() {
    this.hint.setHint({
      title: 'Sobre mí',
      text: 'Vista basica con foto generada por ia por ahora, con una presentación basica, codigo sin mayor complejidad salvo este elemento flotante que explica la seccion y como fue construida',
      tech: ['Angular', 'TypeScript', 'SCSS']
    });
  }

  ngOnDestroy() {
    this.hint.setHint(null);
  }
}
