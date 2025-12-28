import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Raymond Kwame Tawiah - Software Engineer',
    data: { animation: 'HomePage' }
  },
  { 
    path: '**', 
    redirectTo: '',
    pathMatch: 'full'
  }
];
