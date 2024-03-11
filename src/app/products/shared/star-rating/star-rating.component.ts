import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() ratings: number[] = [];
  @Output() ratingAdded = new EventEmitter<number>();

  stars: number[] = [1, 2, 3, 4, 5];

  get averageRating() {
    let total = 0; 
    
    for (let rating of this.ratings) {
      total += rating; 
    }
    if (this.ratings.length === 0) {
      return 0; 
    } else {
      return total / (this.ratings.length - 1); //-1, mert a tömb első eleme alapból a 0, ami ront az átlagon
    }
  }

  rate(rating: number) {
    this.ratings.push(rating);
    this.ratingAdded.emit(rating);
  }

}
