/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import '../App.css';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => Object.values(state.books).flatMap((bookArray) => bookArray));

  const dispatch = useDispatch();

  const handleProgress = () => {
    const progress = Math.floor(Math.random() * 100);
    return progress;
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className="booklist">
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          progress={handleProgress()}
        />
      ))}
    </div>
  );
};
export default BookList;
