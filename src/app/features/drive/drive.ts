import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';

@Component({
  selector: 'app-drive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drive.html',
  styleUrls: ['./drive.scss']
})
export class DriveComponent implements OnInit, OnDestroy {
  constructor(private hint: HintService) {}

  ngOnInit() {
    this.hint.setHint({
      title: 'Drive',
      text: 'Esta vista el enlace a la carpeta de Google Drive donde se encuentran los proyectos y otros documentos del portafolio',
      tech: ['Angular', 'TypeScript', 'SCSS']
    });
  }

  ngOnDestroy() {
    this.hint.setHint(null);
  }
}
