import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';
import { SkillsService, SkillGroup } from '../../services/skills.service'; 

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills: SkillGroup[] = [];

  constructor(
    private skillsService: SkillsService,
    private hint: HintService
  ) {}
  // Método para inicializar el componente y cargar las habilidades desde el servicio. parte del ciclo de vida del componente
  ngOnInit(): void {
    // hint inicial (se puede actualizar luego cuando carguen las skills)
    this.hint.setHint({
      title: 'Habilidades',
      text: 'Resumen de mis habilidades técnicas y herramientas con las que trabajo. Estas se obtienen de un endpoint publico simple que creé usando Node.js en Express',
      tech: ['Angular, Node.js, Express, Api REST']
    });

    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }
  // Método para limpiar el hint al destruir el componente. parte del ciclo de vida del componente
  ngOnDestroy(): void {
    // limpiar hint al salir del componente para no mostrar info obsoleta
    this.hint.setHint(null);
  }
}