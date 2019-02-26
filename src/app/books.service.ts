import { Injectable } from '@angular/core';
import { bookData } from './books.data';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

export interface BookEntity {
  isbn: string;
  author: string;
  date: string;
  rating: number;
  pages: number;
  title: string;
  price: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  selected: BookEntity;
  selectedBook: BehaviorSubject<BookEntity> = new BehaviorSubject<BookEntity>(null);

  constructor() { }

  // Return Observable Of Books After Delay
  getBooks(): Observable<BookEntity[]> {
    return of(bookData).pipe(delay(700));
  }

  // Get A Books ISBN
  getBook(isbn: string): Observable<BookEntity> {
    // Find Book With Matching ISBN
    const book = bookData.find(b => b.isbn === isbn);

    // Check To See If Book Exist
    if (!!book) {
      // Save State Of Selected Book
      this.selectedBook.next(book);
    }

    // Return Selected Book
    return of(book);
  }
}
