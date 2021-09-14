import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from 'src/app/models/book.model';
import {BookService} from '../../services/books/book.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css'],
})
export class BooksViewComponent implements OnInit, OnDestroy {
  books: Array<Book>;
  booksSub!: Subscription

  constructor(private booksService: BookService) {
    this.books = [];
  }

  ngOnInit(): void {
    this.booksSub = this.booksService.books.subscribe((books: Array<Book>) => {
      this.books = books;
    });
  }

  onClickSwitchAllStatus(newStatus: string) {
    this.booksService.onClickSwitchAllStatus(newStatus);
  }

  ngOnDestroy() {
    this.booksSub.unsubscribe();
  }
}
