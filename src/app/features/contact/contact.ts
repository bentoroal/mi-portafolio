import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(private hint: HintService) {}

  ngOnInit() {
    this.hint.setHint({
      title: 'Contacto',
      text: 'Esta vista muestra 2 enlaces, uno para enviar un correo y otro para acceder al perfil de LinkedIn',
      tech: ['Angular', 'TypeScript', 'SCSS']
    });
  }

  ngOnDestroy() {
    this.hint.setHint(null);
  }
}

//Esta vista muestra 2 enlaces, uno para enviar un correo y otro para acceder al perfil de LinkedIn