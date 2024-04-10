import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { SessionComponent } from './pages/session/session.component';

@NgModule({
  declarations: [LayoutPageComponent, CatalogComponent, SessionComponent],
  imports: [CommonModule, SharedModule],
})
export class ReservationsModule {}
