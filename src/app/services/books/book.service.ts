import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // Subject => On peut observer ses changements mais il n'y a pas de
  // cache

  // BehaviourSubject => Subject + on a le cache de la dernière
  // valeur envoyée

  // ReplaySubject => BehaviourSubject + on peut gérer des caches n-1
  books: BehaviorSubject<Array<Book>>;

  constructor() {
    const booksToPush = [
      new Book('Titre 1', 'Auteur 1', 'Libre'),
      new Book('Titre 2', 'Auteur 2', 'Libre'),
      new Book('Titre 3', 'Auteur 3', 'Pris'),
      new Book('Titre 4', 'Auteur 4', 'Libre'),
      new Book('Titre 5', 'Auteur 5', 'Pris'),
      new Book('Titre 6', 'Auteur 6', 'Libre'),
    ];
    this.books = new BehaviorSubject<Array<Book>>(booksToPush);
  }
  onClickSwitchAllStatus(newStatus: string) {
    const booksToEdit = this.books.getValue();
    booksToEdit.forEach((book) => (book.status = newStatus));
    this.books.next(booksToEdit);
  }
  switchStatus(bookId: number, newStatus: string) {
    const booksToEdit = this.books.getValue();
    for (let book of booksToEdit) {
      if (book.id === bookId) {
        book.status = newStatus;
        this.books.next(booksToEdit);
        break;
      }
    }
  }
}
