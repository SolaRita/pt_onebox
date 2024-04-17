import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartCardComponent } from './cart-card/cart-card.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent, CartCardComponent],
  imports: [CommonModule],
  exports: [CartComponent],
})
export class CartModule {}
