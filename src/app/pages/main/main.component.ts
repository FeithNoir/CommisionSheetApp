import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import ContactComponent from '../components/contact/contact.component';
import DetailsComponent from '../components/details/details.component';
import HomeComponent from '../components/home/home.component';
import HowItWorksComponent from '../components/how-it-works/how-it-works.component';
import PricingComponent from '../components/pricing/pricing.component';
import TimeframeComponent from '../components/timeframe/timeframe.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ContactComponent,
    DetailsComponent,
    HomeComponent,
    HowItWorksComponent,
    PricingComponent,
    TimeframeComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export default class MainComponent {

}
