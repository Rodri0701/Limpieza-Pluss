import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'counter',
        loadComponent:() => import('./pagecounter/pagecounter').then(m => m.Pagecounter)
    },
    {
        path: 'hero',
        loadComponent:() => import('./pagehero/pagehero').then(m => m.Pagehero)
    },
    {
        path : '',
        loadComponent:() => import('./inicio/inicio').then(m => m.Inicio)
    },
    {
        path : 'nosotros',
        loadComponent:() => import('./nosotros/nosotros').then(m => m.Nosotros)
    }
];
