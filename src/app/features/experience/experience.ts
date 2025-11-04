import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {}
