/* eslint-disable max-len */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => Object.values(state.books).flatMap((bookArray) => bookArray));

  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};
export default BookList;
