import { Component, OnInit } from '@angular/core';
import { BookEntity, BooksService } from '../books.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<BookEntity>;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    // Get Book ID From Route Params
    this.route.params.subscribe((params: Params) => {
      this.book$ = this.booksService.getBook(params.id);
    });
  }

  // Add Selected Book To Cart
  addToCart(book: BookEntity) {
    this.cartService.add(book);
  }

  // Get Book Rating Stars
  getRatingStars(book: BookEntity) {
    return Array(book.rating);
  }
}
