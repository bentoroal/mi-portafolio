import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
constructor(private hint: HintService) {}

  ngOnInit() {
    this.hint.setHint({
      title: 'Experiencia Laboral',
      text: 'En esta seccion se muestran las experiencias laborales, junto a su detalle y logros. Se utiliza un componente Card reutilizable expandible al clickear',
      tech: ['Angular', 'TypeScript', 'SCSS']
    });
  }

  ngOnDestroy() {
    this.hint.setHint(null);
  }
}
