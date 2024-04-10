import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventItemComponent } from './event-item/event-item.component';

@NgModule({
  declarations: [CartComponent, EventCardComponent, EventItemComponent],
  imports: [CommonModule],
  exports: [CartComponent],
})
export class CartModule {}
