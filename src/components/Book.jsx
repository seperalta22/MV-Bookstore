// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import '../App.css';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book">
      <div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
      <button type="button" onClick={handleRemoveBook}>
        Delete Book
      </button>
    </div>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
