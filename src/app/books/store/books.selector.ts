import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Books } from './books'

// The 'createFeatureSelector' loads from the '@ngrx/store'. 
// The 'createFeatureSelector' is used to fetch all the data from our feature 
// module(eg: 'Books' module). 
// Here the name of our selector 'mybooks' must be used to register the 'bookReducer' 
// into the 'books.module.ts' to register the feature store or child store.

export const selectBooks = createFeatureSelector<Books[]>('mybooks');

export const selectBookById = (bookId: number) =>
  createSelector(selectBooks, (books: Books[]) => {
    var bookbyId = books.filter((_) => _.id == bookId);
    if (bookbyId.length == 0) {
      return null;
    }
    return bookbyId[0];
});