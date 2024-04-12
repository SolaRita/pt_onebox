import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventListComponent } from './components/event-list/event-list.component';

import { SessionListComponent } from './components/session-list/session-list.component';
import { RouterModule } from '@angular/router';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { CartModule } from '../cart/cart.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutPageComponent,
    CatalogPageComponent,
    DetailPageComponent,
    EventCardComponent,
    EventListComponent,
    SessionItemComponent,
    SessionListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReservationsRoutingModule,
    CartModule,
    HttpClientModule,
  ],
})
export class ReservationsModule {}
