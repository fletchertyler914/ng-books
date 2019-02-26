import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BooksService } from './books.service';
import { first, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-books';

  constructor(private router: Router, private booksService: BooksService) {
    // Subscribe to router events to catch page refresh event
    this.router.events
    .pipe(
      // Listen For NavigationEnd Event
      filter(e => e instanceof NavigationEnd),
      // Parse Out ISBN From URL
      map((e: NavigationEnd) => e.url.split('/')[2]),
      // Take Only The First Event And Unsubscribe
      first()
    )
    .subscribe(isbn => {
      // If ISBN Exist On Route, Fetch Book Details For It
      if (!!isbn) {
        booksService.getBook(isbn);
      }
    });
  }
}
