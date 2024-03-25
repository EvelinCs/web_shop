import { Component, OnInit } from '@angular/core';
import { SearchService } from '../navbar/search.service';
import { ListProductsService } from '../services/list-products.service';
import { combineLatest, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  searchTerm: string;

  searchedItems: any[] = [];

  constructor(private searchService: SearchService){}

  ngOnInit(): void {
    this.searchService.getSearchedItems().subscribe(items => {
      this.searchedItems = items;
    });

    
  }

}
