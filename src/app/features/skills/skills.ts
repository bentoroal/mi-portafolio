import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SkillGroup = { categoria: string; items: string[] };

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skills: SkillGroup[] = [
    { categoria: 'Lenguajes', items: ['Python', 'Javascript', 'Java', 'PHP', 'Kotlin'] },
    { categoria: 'Frameworks', items: ['React', 'Django', 'Angular', 'Next'] },
    { categoria: 'Bases de datos', items: ['MySQL', 'MongoDB'] },
    { categoria: 'Desarrollo Web', items: ['HTML', 'CSS', 'Bootstrap'] },
    { categoria: 'Herramientas', items: ['Visual Studio Code', 'Android Studio', 'GitHub', 'AWS', 'Google Cloud'] },
    { categoria: 'Idiomas', items: ['Español (Nativo)', 'Inglés (Avanzado)'] }
  ];
}