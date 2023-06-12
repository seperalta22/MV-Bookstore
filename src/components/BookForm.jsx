import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; //eslint-disable-line
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h3 className="book-title">ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default BookForm;
