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
    this.cartService.cart.subscribe((books: BookEntity[]) => {
      // Set Cart Item Count And Price Total
      this.cartCount = books.length;
      this.cartTotal = this.cartService.calculateCartTotal();
    });
  }
}
