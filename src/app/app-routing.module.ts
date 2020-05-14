import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'forecast-list',
    loadChildren: () => import('./forecast-list/forecast-list.module').then( m => m.ForecastListPageModule)
  },
  {
    path: 'forecast-details',
    loadChildren: () => import('./forecast-details/forecast-details.module').then( m => m.ForecastDetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'forecast-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
