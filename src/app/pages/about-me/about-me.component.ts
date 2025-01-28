import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import HomeComponent from '../components/home/home.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export default class AboutMeComponent {
  protected imgSrc: string = 'profile.png';
}
