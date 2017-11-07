import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.httpRequestService.getProducts()
      .subscribe(products => this.products = products);
  }

  addToCart(product: Product): void {
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];
    cartProducts.push(product);
    localStorage.setItem('cart', JSON.stringify(cartProducts));
  }

}
