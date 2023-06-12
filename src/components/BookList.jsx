/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
	const [isLoading, setIsLoading] = useState(true);
	const books = useSelector((state) =>
		Object.values(state.books).flatMap((bookArray) => bookArray)
	);

	console.log(books);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			await dispatch(getBooks());
			setIsLoading(false);
		};

		fetchData();
	}, [dispatch]);

	return (
		<div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				books.map((book) => (
					<Book
						key={book.item_id}
						id={book.item_id}
						title={book.title}
						author={book.author}
					/>
				))
			)}
		</div>
	);
};
export default BookList;
