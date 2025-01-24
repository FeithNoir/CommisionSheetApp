import { Component } from '@angular/core';
import { DetailsInfo } from '../../../core/interfaces/details.interface';

@Component({
  selector: 'pages-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent {
  protected whatIdo: DetailsInfo = {
    title: '🖌️ What I Do',
    items: [
      '✅ Original characters (OCs)',
      '✅ Fanart',
      '✅ NSFW (explicit content, but not all so ask me first)',
      '✅ Yuri/Yaoi',
      '✅ Futanari',
      '✅ Shemales',
      '✅ Crossdressing',
      '✅ Portraits and pin-ups',
      '✅ Variants (e.g., different expressions, outfits, or backgrounds)'
    ],
  }

  protected whatIdont: DetailsInfo = {
    title: '❌ What I Don’t Do',
    items: [
      '🚫 Heavy gore or violence',
      '🚫 Mechas or overly complex machinery',
      '🚫 Highly detailed backgrounds',
      '🚫 Clothes Designs',
      '🚫 Chubby',
      '🚫 Furry',
      '🚫 Scat/other fluids',
      '🚫 Controversial stuff',
    ],
  }
}
