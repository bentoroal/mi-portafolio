import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
})
export class EducationComponent {}