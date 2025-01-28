import { Component, input } from '@angular/core';

@Component({
  selector: 'pages-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  public imgSrc = input<string>('profile.png');
}
