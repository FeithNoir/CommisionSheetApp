import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./pages/layout/layout.component'),
    title: 'Commission Sheet',
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];
