import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintService } from '../../core/hint/hint.service';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './projects.html',
	styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
	projects = [
		{
			title: 'MiClimApp',
			subtitle: 'App Android — App de clima y alertas de heladas y vientos',
			description:
				'Aplicación Android que notifica alertas de heladas y vientos. Configuración por zona y notificaciones para avisar condiciones peligrosas.',
			repoUrl: 'https://github.com/bentoroal/MiClimApp',
			apkUrl: 'https://drive.google.com/file/d/1LCUpDuEcY556D_QuZr1rYhYvEexQ4UUh/view?usp=drive_link',
			driveUrl: 'https://drive.google.com/drive/folders/1JDn5oGPWcdd9U8KL8i07skvRZknHVMXh?usp=drive_link',
			siteUrl: '',
			logoFile: 'miclimapp.png'
		},
		{
			title: 'MiFichaMed',
			subtitle: 'Registro médico y generación de informes',
			description:
				'Registro de antecedentes, enfermedades crónicas, alergias y medicamentos. Genera un informe imprimible/compartible para el médico con el historial de salud.',
			// Repositorios separados: frontend y backend
			repoFrontUrl: 'https://github.com/bentoroal/mifichamed-frontend',
			repoBackUrl: 'https://github.com/bentoroal/mifichamed-backend',
			apkUrl: '',
			driveUrl: 'https://drive.google.com/drive/folders/1RMmoTrkR3RFO1MkGhcilgRZOLep5R1o7?usp=drive_link',
			siteUrl: 'https://master.d3b2r7v6uor1t7.amplifyapp.com/',
			logoFile: 'mifichamed.png'
		}
	];

	constructor(private hint: HintService) {}

	ngOnInit() {
		this.hint.setHint({
			title: 'Proyectos',
			text:
				'Aquí se muestran dos proyectos destacados: una app Android de clima con alertas y MiFichaMed para gestionar datos médicos y generar informes.',
			tech: ['Android', 'Kotlin/Java', 'Angular', 'TypeScript', 'SCSS']
		});
	}

	ngOnDestroy() {
		this.hint.setHint(null);
	}
}

