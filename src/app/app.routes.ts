import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventsComponent } from './components/events/events.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { GivingComponent } from './components/giving/giving.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'ministries', component: MinistriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sermons', component: BlogComponent },
  { path: 'events', component: EventsComponent },
  { path: 'newsletter', component: ArchivesComponent },
  { path: 'give', component: GivingComponent },
  { path: '**', redirectTo: '' } // Wildcard route for 404 page
];
