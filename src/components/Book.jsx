// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import '../App.css';

function Book({ title, author }) {
  return (
    <div className="book">
      <div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
      <button type="button">Delete</button>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
