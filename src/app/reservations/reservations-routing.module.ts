import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'events',
        component: CatalogPageComponent,
      },
      { path: 'events/:id', component: DetailPageComponent },
      { path: '**', redirectTo: 'events' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
