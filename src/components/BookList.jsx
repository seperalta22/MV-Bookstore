import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
	const books = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBooks());
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
