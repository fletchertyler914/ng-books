import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { BookEntity, BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  @Input() books: BookEntity[];
  @Input() selectedBook: BookEntity;
  @Output() updateSelectedBook: EventEmitter<BookEntity> = new EventEmitter();

  constructor() { }
}
