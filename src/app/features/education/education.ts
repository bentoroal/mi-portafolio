import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
})
export class EducationComponent implements OnInit, OnDestroy {
    constructor(private hint: HintService) {}

  ngOnInit() {
    this.hint.setHint({
      title: 'Educación',
      text: 'En esta seccion se muestran los estudios realizados, junto a su detalle y logros. Se utiliza un componente Card reutilizable expandible al clickear',
      tech: ['Angular', 'TypeScript', 'SCSS']
    });
  }

  ngOnDestroy() {
    this.hint.setHint(null);
  }
}