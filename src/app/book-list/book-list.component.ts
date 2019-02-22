import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BookEntity } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  @Input() books: BookEntity[];
  public selectedBook: number;

  constructor(private router: Router) { }

  // Route The Selected Book To Book Details
  // And Add Active Class At The Selected Books Index
  selectBook(book: BookEntity, index: number) {
    this.selectedBook = index;
    this.router.navigate([ `/books/${book.isbn}`]);
  }
}
