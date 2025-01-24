import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
