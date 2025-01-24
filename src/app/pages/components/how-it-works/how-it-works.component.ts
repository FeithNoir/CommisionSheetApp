import { Component } from '@angular/core';
import { HowWorksInfo } from '../../../core/interfaces/howWorks.interface';

@Component({
  selector: 'pages-howItWorks',
  standalone: true,
  imports: [],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export default class HowItWorksComponent {
  protected howWorksInfo: HowWorksInfo = {
    title: '📋 How It Works',
    description: 'I follow a three-step process for every commission:',
    process: [
      `Sketch: I’ll send you the initial draft for approval.`,
      `Base Colors: A colored version without final details.`,
      `Final Version: The completed, polished artwork.`,
    ],
    note: `You can request up to three changes during the process (e.g., in the sketch
    and base color stages). To make the most of these, please provide all
    necessary references and details upfront.`,
    important: `Important: Major changes (e.g., adding a new character) won’t be accepted
    during the final stage, so be sure everything is approved in the earlier
    steps.`
  }
}
