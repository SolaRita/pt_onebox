import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { EventDetail } from './interfaces/event-detail';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnChanges {
  @Input() cartEvents!: EventDetail[] | null;

  isLoading = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartEvents'] && changes['cartEvents'].currentValue) {
      this.cartEvents = changes['cartEvents'].currentValue;
      this.isLoading = false;
    }
  }
}
