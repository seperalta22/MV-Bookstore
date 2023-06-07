import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <button type="button">Delete</button>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
