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

  // Helper Function To Calculate Running Cart Total
  calculateCartTotal(): string {
    let totalPrice = 0;

    // Subscribe To Cart To Calculate Running Total
    this.cart.subscribe((cartItems: BookEntity[]) => {
      if (cartItems.length > 0) {
        totalPrice = cartItems
          .map(book => book.price)
          .reduce((runningtotal, currentBookPrice) => currentBookPrice + runningtotal);
      }
    });

    return totalPrice.toFixed(2);
  }
}
