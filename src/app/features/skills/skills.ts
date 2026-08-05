import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';
import { SkillsService, SkillGroup, LOCAL_SKILLS } from '../../services/skills.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills: SkillGroup[] = [];
  private apiSub?: Subscription;

  constructor(
    private skillsService: SkillsService,
    private hint: HintService
  ) {}
  // Método para inicializar el componente y cargar las habilidades desde el servicio. parte del ciclo de vida del componente
  ngOnInit(): void {
    // hint inicial (se puede actualizar luego cuando carguen las skills)
    this.hint.setHint({
      title: 'Habilidades',
      text: 'Resumen de mis habilidades técnicas y herramientas con las que trabajo. Estas se obtienen de un endpoint publico simple que creé usando Node.js en Express. El endpoint esta alojado en render, el que se desactiva temporalmente si no se usa por un tiempo, por lo que se cargan datos locales si no esta disponible la api',
      tech: ['Angular, Node.js, Express, Api REST']
    });

    // Cargar datos locales inmediatamente (plan B) para no depender de la API dormida.
    this.skills = LOCAL_SKILLS;

    // Intentar obtener datos reales desde la API con timeout; si responde, reemplazamos los datos.
    this.apiSub = this.skillsService.fetchFromApi(3000).subscribe(
      data => {
        this.skills = data;
      },
      err => {
        // API no disponible o tardó demasiado — ya estamos mostrando el fallback local.
        // Log para depuración; no interrumpimos la UX.
        // eslint-disable-next-line no-console
        console.warn('Skills API unavailable; using local fallback', err);
      }
    );
  }
  // Método para limpiar el hint al destruir el componente. parte del ciclo de vida del componente
  ngOnDestroy(): void {
    // limpiar hint al salir del componente para no mostrar info obsoleta
    this.hint.setHint(null);
    if (this.apiSub) {
      this.apiSub.unsubscribe();
    }
  }
}