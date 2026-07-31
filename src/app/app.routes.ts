import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path: 'counter',
        loadComponent:() => import('./pages/pagecounter/pagecounter').then(m => m.Pagecounter)
    },
    {
        path: 'hero',
        loadComponent:() => import('./pages/pagehero/pagehero').then(m => m.Pagehero)
    },
    {
        path : '',
        loadComponent:() => import('./pages/inicio/inicio').then(m => m.Inicio)
    },
    {
        path : 'nosotros',
        loadComponent:() => import('./pages/nosotros/nosotros').then(m => m.Nosotros)
    },
    // {
    //     path : 'productos',
    //     loadComponent:() => import('./productos/productos').then(m => m.Productos)
    // },
    {
        path: 'productosPage',
        loadComponent:() => import('./pages/productos-page/productos-page').then(m => m.ProductosPage)
    },
    {
        path: 'servicios',
        loadComponent:() => import ('./pages/servicios/servicios').then(m => m.Servicios)
    },
    {
        path:'login',
        loadComponent:() => import ('./pages/Login/login').then(m => m.Minimal)

    }
];
