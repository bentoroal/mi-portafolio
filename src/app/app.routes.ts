import { Routes } from '@angular/router';
import { AboutMeComponent } from './features/aboutme/aboutme';
import { SkillsComponent } from './features/skills/skills';
import { ExperienceComponent } from './features/experience/experience';
import { EducationComponent } from './features/education/education';
import { ContactComponent } from './features/contact/contact';
import { KnowledgeComponent } from './features/knowledge/knowledge';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'about' }
];