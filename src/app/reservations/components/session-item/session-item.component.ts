import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Session } from '../../interfaces/event-detail';

@Component({
  selector: 'app-session-item',
  standalone: false,
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionItemComponent {
  @Input()
  public session: Session = {
    date: 0,
    availability: 0,
  };

  public selected: number = 0;

  sumar() {
    this.selected += 1;
  }
  restar() {
    this.selected -= 1;
  }
}
