import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BookService} from 'src/app/services/books/book.service';

@Component({
  selector: '[app-books-table-line]',
  templateUrl: './books-table-line.component.html',
  styleUrls: ['./books-table-line.component.css'],
})
export class BooksTableLineComponent implements OnInit, OnChanges {
  @Input() id!: number;
  @Input() title!: string;
  @Input() author!: string;
  @Input() status!: string;

  nextStatus!: string;

  constructor(private booksService: BookService) {

  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setNextStatus();
  }

  onClickSwitchAllStatus() {
    this.booksService.switchStatus(this.id, this.nextStatus);
  }

  private setNextStatus() {
    if (this.status === 'Libre') {
      this.nextStatus = 'Pris';
    } else {
      this.nextStatus = 'Libre';
    }
  }
}
