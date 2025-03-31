import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Input() maxStars = 5;
  @Input() readOnly = false;
  @Output() ratingChange = new EventEmitter<number>();

  hoverIndex = -1;

  setRating(index: number) {
    if (!this.readOnly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

  setHover(index: number) {
    if (!this.readOnly) {
      this.hoverIndex = index;
    }
  }

  clearHover() {
    if (!this.readOnly) {
      this.hoverIndex = -1;
    }
  }

  isFilled(index: number): boolean {
    return index < (this.hoverIndex >= 0 ? this.hoverIndex + 1 : this.rating);
  }
}