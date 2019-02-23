import { Component, OnInit } from '@angular/core';
import { BooksService, BookEntity } from '../books.service';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: [ './book-container.component.scss' ]
})
export class BookContainerComponent implements OnInit {
  books: Observable<BookEntity[]>;
  selectedBook: Observable<BookEntity>;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    // Subscribe To Book Service To Fetch Books
    this.books = this.booksService.getBooks();

    // Subscribe To Selected Book
    this.selectedBook = this.booksService.selectedBook;
  }
}
