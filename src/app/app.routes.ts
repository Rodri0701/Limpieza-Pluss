import { Routes } from '@angular/router';
import path from 'path';

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
    },
    // {
    //     path : 'productos',
    //     loadComponent:() => import('./productos/productos').then(m => m.Productos)
    // },
    {
        path: 'productosPage',
        loadComponent:() => import('./productos-page/productos-page').then(m => m.ProductosPage)
    }
];
