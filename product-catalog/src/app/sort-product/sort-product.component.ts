import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-sort-product',
  templateUrl: './sort-product.component.html',
  styleUrl: './sort-product.component.scss'
})
export class SortProductComponent {

  constructor(private productService: ProductService) {}

  setSortDirection(direction: string) {
    this.productService.onSortOrderChange(direction);

  }
}
