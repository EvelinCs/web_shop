import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../navbar/search.service';
import { SaleService } from '../sale/sale.service';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  @ViewChild('scrollable') scrollable: ElementRef;

  searchTerm: string;

  searchedItems: any[] = [];

  onSaleProducts: any[] = [];

  constructor(private searchService: SearchService, private saleService: SaleService){}

  ngOnInit(): void {
    this.searchService.getSearchedItems().subscribe(items => {
      this.searchedItems = items;
    });

    this.getOnSale();    
  }

  getOnSale(){
    this.saleService.getFoodProductsOnSale().subscribe(data => {
      this.onSaleProducts = data;
    });

    this.saleService.getProductsOnSale().subscribe(data => {
      this.onSaleProducts = this.onSaleProducts.concat(data);
    });
  }

  getScrollAmount(): number {
    let isMobile = window.innerWidth < 600; // 768px alatt feltételezzük, hogy mobil eszköz
    return isMobile ? 235 : 300; // Mobil eszközökön 100, egyébként 300
  }

  scrollLeft() {
    this.scrollable.nativeElement.scrollLeft -= this.getScrollAmount(); 
  }

  scrollRight() {
    this.scrollable.nativeElement.scrollLeft += this.getScrollAmount(); 
  }

}
