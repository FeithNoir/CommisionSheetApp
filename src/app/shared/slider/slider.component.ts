import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  public displayImages = input.required<string[]>();
  protected currentImage: string = 'profile.png';
  protected currentIndex: number = 0;

  protected plusSlides(value: number): void {
    this.currentIndex = this.currentIndex + value;
    this.currentImage = this.displayImages()[this.currentIndex];
  }

  protected currentSlide(index: number) {
    this.currentIndex = index;
    this.currentImage = this.displayImages()[index];
  }
}
