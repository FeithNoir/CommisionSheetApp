import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    CardComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
  ]
})
export class SharedModule { }
