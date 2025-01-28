import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Commission } from '../../core/interfaces/commission.interface';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export default class PricingComponent {
  protected activeTab: number = 0;
  protected tabs: string[] = [
    'Single Drawing',
    'Image Set',
  ];

  protected commission: Commission[] = [
    {
      title: 'Single Drawing',
      img: 'profile.png',
      type: 'Single Drawing',
      price: 15,
      description: 'A simple illustration.',
      considerations: [
        'You can choose between a simple background or some more complex',
        'Max. 2 characters',
        '+5$ extra dollar for each character since the 3rd one',
      ]
    },
    {
      title: 'Image Set',
      img: 'profile.png',
      type: 'Image Set',
      price: 25,
      description: 'A set of image variants.',
      considerations: [
        '10 variants',
        'You can choose between a simple background or some more complex',
        'Max. 2 characters',
        '+5$ extra dollar for each character since the 3rd one',
        '+2$ extra dollar for each variant since 11th one',
      ]
    },
  ];

  selectTab(index: number): void {
    this.activeTab = index;
  }
}
