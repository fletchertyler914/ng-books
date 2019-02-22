import { Injectable } from '@angular/core';
import { BookEntity } from './books.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: BookEntity[] = [];
  cart: BehaviorSubject<BookEntity[]> = new BehaviorSubject<BookEntity[]>([]);

  constructor() {
  }

  add(book) {
    // Add Book To Cart Items
    this.items.push(book);

    // Update Cart With Latest Items
    this.cart.next(this.items);
  }

  // Return Cart Items
  getItems(): Observable<BookEntity[]> {
    return this.cart;
  }
}
