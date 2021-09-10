import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/books/book.service';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { BooksTableLineComponent } from './components/books-table-line/books-table-line.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksViewComponent,
    BooksTableComponent,
    BooksTableLineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
