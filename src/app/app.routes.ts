import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'services', 
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent)
  },
  { 
    path: 'events', 
    loadComponent: () => import('./components/events/events.component').then(m => m.EventsComponent)
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent)
  },
  { 
    path: 'archives', 
    loadComponent: () => import('./components/archives/archives.component').then(m => m.ArchivesComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'admin/login', 
    loadComponent: () => import('./components/admin-login/admin-login.component').then(m => m.AdminLoginComponent)
  },
  { 
    path: 'admin', 
    loadComponent: () => import('./components/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AdminGuard]
  },
  { path: '**', redirectTo: '/home' }
];
