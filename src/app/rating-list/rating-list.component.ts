import { Component, OnInit } from '@angular/core';
import { Rating } from '../shared/models/rating';
import { RatingListService } from './rating-list.service';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss']
})
export class RatingListComponent implements OnInit {

  ratingList: Rating[] = [];

  displayedColumns: string[] = ['userId', 'productId', 'productName', 'rating'];

  constructor(private authService: AuthService, private ratingListService: RatingListService){}

    ngOnInit() {
      this.loadRatings();
    }

    loadRatings(){
      this.ratingListService.getRatings().subscribe(data => {
        this.ratingList = data;
      });
    }

}
