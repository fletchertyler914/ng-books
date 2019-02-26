import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { BookEntity } from '../books.service';

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
}
