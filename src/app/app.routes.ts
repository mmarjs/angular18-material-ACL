import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./features/main/main.module').then(m => m.MainModule) },
    // { path: '', redirectTo: 'main', pathMatch: 'full' },
];
