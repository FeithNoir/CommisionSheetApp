import { Component, input } from '@angular/core';
import { Card } from '../../core/interfaces/card.interface';

@Component({
  selector: 'shared-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public cardInfo = input.required<Card>();
}
