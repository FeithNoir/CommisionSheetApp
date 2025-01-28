import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/layout/layout.component'),
    loadChildren: () => [
      { path: 'main', loadComponent: () => import('./pages/main/main.component'), title: 'Main Page', },
      { path: 'about', loadComponent: () => import('./pages/about-me/about-me.component'), title: 'About Me', },
      { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component'), title: 'Pricing', },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact.component'), title: 'Contact Me', },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', redirectTo: 'main' },
    ],
    title: 'Commission Sheet',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-me/about-me.component'),
    title: 'About Me',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
