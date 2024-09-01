import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

export const routes: Routes = [
    {path: 'home',        loadComponent: () => import('./usuarios/lista/lista.component').then(m => m.ListaComponent)},
    {path: 'usuario/:id', loadComponent: () => import('./usuarios/usuario/usuario.component').then(m => m.UsuarioComponent)},
    {path: '**', redirectTo: 'home'}
    // {path: '', loadChildren: () => import('./dashboard/dashboard.router'), canActivate: [authGuard]},
];
