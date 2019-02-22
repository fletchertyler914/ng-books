import { Injectable } from '@angular/core';
import { BookEntity } from './books.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: BehaviorSubject<BookEntity[]> = new BehaviorSubject<BookEntity[]>([]);

  constructor() { }

  add(book) {
    // Update Cart With Latest Items
    this.cart.next([...this.cart.getValue().concat(book)]);
  }

  // Return Cart Items
  getItems(): Observable<BookEntity[]> {
    return this.cart;
  }
}
