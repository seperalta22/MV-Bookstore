// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import '../App.css';
import ProgressCircle from './ProgressCircle';

function Book({
  id, title, author, category, progress,
}) {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book">
      <div>
        <span className="book-category">{category}</span>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <div className="Line-2" />
          <button type="button" onClick={handleRemoveBook}>
            Remove
          </button>
          <div className="Line-2" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <ProgressCircle progress={progress} />
        <div className="book-progress-text">
          <p className="book-progress-percent">{`${progress}%`}</p>
          <p className="book-progress-completed">Completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <p className="book-chapter-current">CURRENT CHAPTER</p>
        <p className="book-chapter-number">Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Book;
