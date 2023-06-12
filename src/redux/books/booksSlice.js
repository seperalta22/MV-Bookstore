import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const API_BASE_URL =	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ Mvpw9pKcLZqeylfQJV2k/books'; // eslint-disable-line

// GET
export const fetchBooks = createAsyncThunk('fetchBooks', async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
});

// POST
export const addBook = createAsyncThunk('addBook', async (book) => {
  const response = await axios.post(`${API_BASE_URL}`, book);
  return response.data;
});

// DELETE
export const removeBook = createAsyncThunk('removeBook', async (bookId) => {
  await axios.delete(`${API_BASE_URL}/${bookId}`);
  return bookId;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(
        removeBook.fulfilled,
				(state, action) => state.filter((book) => book.id !== action.payload) // eslint-disable-line
      );
  },
});

export default booksSlice.reducer;
