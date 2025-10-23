import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/aboutme/aboutme').then(m => m.AboutMeComponent),
    data: { animation: 'fadeIn' }

  },
  {
    path: 'education',
    loadComponent: () =>
      import('./features/education/education').then(m => m.EducationComponent),
    data: { animation: 'testZoom' }
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/experience').then(m => m.ExperienceComponent),
    data: { animation: 'fadeIn' }
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./features/skills/skills').then(m => m.SkillsComponent),
    data: { animation: 'fadeIn' }
  },
  {
    path: 'knowledge',
    loadComponent: () =>
      import('./features/knowledge/knowledge').then(m => m.KnowledgeComponent),
    data: { animation: 'fadeIn' }
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then(m => m.ContactComponent),
    data: { animation: 'fadeIn' }
  },
  { path: '**', redirectTo: 'about' }
];