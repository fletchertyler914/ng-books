import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookEntity, BooksService } from '../books.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  @Input() books: BookEntity[];
  @Input() selectedBook: BookEntity;

  constructor(private router: Router, private bookService: BooksService) { }

  // Route The Selected Book To Book Details
  // And Add Active Class At The Selected Books Index
  selectBook(book: BookEntity) {
    this.bookService.selectedBook.next(book);
    this.router.navigate([ `/books/${book.isbn}`]);
  }
}
