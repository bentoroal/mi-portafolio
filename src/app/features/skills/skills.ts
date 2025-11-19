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
    private hint: HintService // <-- agregado
  ) {}

  ngOnInit(): void {
    // hint inicial (se puede actualizar luego cuando carguen las skills)
    this.hint.setHint({
      title: 'Habilidades',
      text: 'Resumen de mis habilidades técnicas y herramientas con las que trabajo.',
      tech: ['Ver listado completo en esta sección']
    });

    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  ngOnDestroy(): void {
    // limpiar hint al salir del componente para no mostrar info obsoleta
    this.hint.setHint(null);
  }
}