import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../models/book.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() title: string;
  @Input() submitLabel: string;
  @Input() bookToEdit: Book;

  @Output() formSubmitted: EventEmitter<Book>

  constructor() {
    this.formSubmitted = new EventEmitter<Book>()
  }

  ngOnInit(): void {
  }

}
