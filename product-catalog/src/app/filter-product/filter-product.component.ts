import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.scss'
})
export class FilterProductComponent {

  searchString: string = '';

  constructor(private productService: ProductService) {}

  initSearch() {
    this.productService.onSearch(this.searchString);
  }

}
