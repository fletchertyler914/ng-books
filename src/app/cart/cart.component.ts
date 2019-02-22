import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { BookEntity } from '../books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.scss' ]
})
export class CartComponent implements OnInit {
  public cartCount: number;
  public cartTotal: string;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // Subscribe To Cart Items
    this.cartService.getItems().subscribe((books: BookEntity[]) => {
      // Set Cart Item Count And Price Total
      this.cartCount = books.length;
      this.cartTotal = this.calculateCartTotal(books).toFixed(2);
    });
  }

  // Helper Function To Calculate Running Cart Total
  calculateCartTotal(books: BookEntity[]): number {
    let totalPrice = 0;

    // Iterate Through Each Book In The Cart
    // And Add The Price To The Total Price
    books.forEach(book => {
      totalPrice += book.price;
    });

    // Return The Total Cart Price
    return totalPrice;
  }

}
