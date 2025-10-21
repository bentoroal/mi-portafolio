import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme.html',
  styleUrls: ['./aboutme.scss']   // <-- corregido (array)
})
export class AboutMeComponent {
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
}
