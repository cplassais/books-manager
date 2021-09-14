import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from 'src/app/services/books/book.service';
import {Book} from "../../models/book.model";

@Component({
  selector: 'app-single-book-view',
  templateUrl: './single-book-view.component.html',
  styleUrls: ['./single-book-view.component.css']
})
export class SingleBookViewComponent implements OnInit {
  book!: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.bookService
      .getBookById(+id)
      .then(
        (bookFound: Book) => {
          this.book = bookFound;
        }
      )
  }
}
