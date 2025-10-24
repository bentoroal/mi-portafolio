import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})

export class CardItemComponent {
  @Input() title = '';
  @Input() institution = '';
  @Input() period = '';
  @Input() description = '';
  @Input() achievements: string[] = [];
  @Input() isPrimary = false;
  @Input() collapsible = false;
}