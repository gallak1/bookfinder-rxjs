import { Routes } from '@angular/router';
import { ListaLivros } from './pages/lista-livros/lista-livros';

export const routes: Routes = [
    { path: '', redirectTo: '/lista-livros', pathMatch: 'full' },
    { path: 'lista-livros', component: ListaLivros },
    { path: '**', redirectTo: '/lista-livros' }
];
