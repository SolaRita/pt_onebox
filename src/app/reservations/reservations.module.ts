import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { SessionComponent } from './pages/session/session.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { SessionListComponent } from './components/session-list/session-list.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    CatalogComponent,
    SessionComponent,
    EventCardComponent,
    EventListComponent,
    SessionItemComponent,
    SessionListComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class ReservationsModule {}
