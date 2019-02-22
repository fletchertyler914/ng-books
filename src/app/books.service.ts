import { Injectable } from '@angular/core';
import { bookData } from './books.data';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

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

  constructor() { }

  // Return Observable Of Books After Delay
  getBooks(): Observable<BookEntity[]> {
    return of(bookData).pipe(delay(700));
  }

  // Get A Books ISBN
  getBook(isbn: string): Observable<BookEntity> {
    const book = bookData.find(b => b.isbn === isbn);
    return of(book);
  }
}
