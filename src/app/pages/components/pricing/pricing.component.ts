import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Card } from '../../../core/interfaces/card.interface';

@Component({
  selector: 'pages-pricing',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export default class PricingComponent {
  protected cardInfo: Card[] = [
    {
      title: 'Single Drawing',
      img: 'profile.png',
      description: `$15: A simple illustration. Additional characters: +$5 each `,
      btnText: 'See more'
    },

    {
      title: 'Image Set',
      img: 'profile.png',
      description: `$25: A set of 10 image variants. Additional variants: +$2 each.`,
      btnText: 'See more'
    },
  ]
}
