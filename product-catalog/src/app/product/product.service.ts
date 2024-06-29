import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private subjectSearchString = new BehaviorSubject<string>('');
  searchString = this.subjectSearchString.asObservable();
  private subjectSortOrder = new BehaviorSubject<string>('');
  sortOrder = this.subjectSortOrder.asObservable();

  products: Product[] = [
    { name: 'SSD', image: 'https://via.placeholder.com/150', price: 10.99 },
    { name: 'HDD', image: 'https://via.placeholder.com/150', price: 20.99 },
    { name: 'RAM', image: 'https://via.placeholder.com/150', price: 30.99 },
    { name: 'Processor', image: 'https://via.placeholder.com/150', price: 10.99 },
    { name: 'Keyboard', image: 'https://via.placeholder.com/150', price: 20.99 },
    { name: 'Mouse', image: 'https://via.placeholder.com/150', price: 30.99 },
    { name: 'Monitor', image: 'https://via.placeholder.com/150', price: 10.99 },
    { name: 'Power Cable', image: 'https://via.placeholder.com/150', price: 20.99 },
    { name: 'HDMI', image: 'https://via.placeholder.com/150', price: 30.99 }
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  onSearch(searchString: string) {
    this.subjectSearchString.next(searchString);
  }

  onSortOrderChange(sortOrder: string) {
    this.subjectSortOrder.next(sortOrder);
  }
}
