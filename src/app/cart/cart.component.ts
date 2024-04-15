import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
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
  @Input() selectedEvents!: EventDetail[] | null;

  isLoading = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedEvents'] && changes['selectedEvents'].currentValue) {
      this.selectedEvents = changes['selectedEvents'].currentValue;
      this.isLoading = false;
    }
  }
}
