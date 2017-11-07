import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {HttpRequestService} from './http-request.service';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  categories: Category[];
  itemsCart = [];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.getCategories();
    this.getItemsCart();
  }

  getCategories(): void {
    this.httpRequestService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getItemsCart() {
    this.itemsCart = JSON.parse(localStorage.getItem('cart'));
  }
}
