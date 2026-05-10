import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:() => import('./pagecounter/pagecounter').then(m => m.Pagecounter)
    },
    {
        path: 'hero',
        loadComponent:() => import('./pagehero/pagehero').then(m => m.Pagehero)
    }
];
