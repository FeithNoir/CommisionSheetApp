import { Component } from '@angular/core';
import { HomeInfo } from '../../../core/interfaces/home.interface';

@Component({
  selector: 'pages-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  protected homeInfo: HomeInfo = {
    title: '✨ Digital Art Commissions! ✨',
    description: ''
  }
}
