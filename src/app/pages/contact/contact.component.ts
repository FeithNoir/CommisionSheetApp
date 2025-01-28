import { Component } from '@angular/core';
import { SocialMedia } from '../../core/interfaces/social-media.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent {
  protected socialMedia: SocialMedia[] = [
    {
      name: 'Facebook',
      icon: '',
      url: ''
    },
    {
      name: 'Instagram',
      icon: '',
      url: ''
    },
    {
      name: 'Deviant Art',
      icon: '',
      url: ''
    },
    {
      name: 'Pixiv',
      icon: '',
      url: ''
    },
    {
      name: 'Patreon',
      icon: '',
      url: ''
    },
  ]
}
