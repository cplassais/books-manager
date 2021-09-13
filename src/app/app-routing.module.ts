import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthViewComponent} from './views/auth-view/auth-view.component';
import {BooksViewComponent} from './views/books-view/books-view.component';
import {AuthGuard} from "./guards/auth/auth.guard";
import {SingleBookViewComponent} from './views/single-book-view/single-book-view.component';

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: BooksViewComponent},
  {path: 'home', canActivate: [AuthGuard], component: BooksViewComponent},
  {path: 'books/:id', canActivate: [AuthGuard], component: SingleBookViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
