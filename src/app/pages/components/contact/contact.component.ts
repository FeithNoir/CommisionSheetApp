import { Component } from '@angular/core';
import { ContantInfo } from '../../../core/interfaces/contact.interface';

@Component({
  selector: 'pages-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent {
  protected contantInfo: ContantInfo = {
    title: '💬 Ready to Order?',
    description: 'Feel free to send me a message with the following details:',
    requirements: [
      'Type of commission (simple illustration or variant set)',
      'Number of characters/variants',
      'Detailed description and references (the more, the better!)'
    ]
  }
}
