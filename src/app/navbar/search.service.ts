import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchedItem = new BehaviorSubject<string>('');
  searchedItems = new BehaviorSubject<any[]>([]);

  setSearchTerm(searchedTerm: string){
    this.searchedItem.next(searchedTerm);
  }

  getSearchTerm(){
    return this.searchedItem.asObservable();
  }

  setSearchedItems(items: any[]) {
    this.searchedItems.next(items);
  }
  
  getSearchedItems() {
    return this.searchedItems.asObservable();
  }

  constructor() { }
}
