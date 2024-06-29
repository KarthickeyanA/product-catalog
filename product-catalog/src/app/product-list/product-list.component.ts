import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchStringsubscription: Subscription;
  sortOrderSubscription: Subscription;

  constructor(private productService: ProductService) {
    this.searchStringsubscription = this.productService.searchString.subscribe(res => {
      if (res !== '') {
        this.searchProductsByString(res);
      }
      else {
        this.getProducts();
      }
    });
    this.sortOrderSubscription = this.productService.sortOrder.subscribe(res => {
      if (res !== '') {
        this.changeSortOrder(res);
      }
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  searchProductsByString(searchString: string) {
    const products = this.productService.getProducts();
    this.products = products.filter(product =>
      product.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    if (this.searchStringsubscription) {
      this.searchStringsubscription.unsubscribe();
    }
    if (this.sortOrderSubscription) {
      this.sortOrderSubscription.unsubscribe();
    }
  }

  changeSortOrder(order: string) {
    this.products = this.products.sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }
}
