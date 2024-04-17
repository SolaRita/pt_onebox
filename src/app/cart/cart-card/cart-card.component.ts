import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EventDetail } from '../interfaces/event-detail';

@Component({
  selector: 'app-cart-card',
  standalone: false,
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartCardComponent implements OnChanges {
  @Input() cartEvent!: EventDetail;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartEvent'] && changes['cartEvent'].currentValue.length > 0) {
      this.cartEvent = changes['cartEvents'].currentValue;
    }
  }
}
