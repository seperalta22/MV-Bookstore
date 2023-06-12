import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((state) => state.books);

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
