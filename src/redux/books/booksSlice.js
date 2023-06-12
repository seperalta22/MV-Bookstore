import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const url =	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Mvpw9pKcLZqeylfQJV2k/books'; // eslint-disable-line

// GET
export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something is wrong');
    }
  },
);

// POST
export const postBook = createAsyncThunk('books/postBook', async (data) => {
  try {
    const response = await axios.post(url, data);
    return {
      mesage: response.data,
      data,
    };
  } catch (error) {
    return error;
  }
});

// DELETE
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return id;
  } catch (error) {
    return error;
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const booksObj = action.payload;
        const bookIdArray = Object.keys(booksObj);
        const books = bookIdArray.map((bookId) => ({
          item_id: bookId,
          title: booksObj[bookId][0].title,
          author: booksObj[bookId][0].author,
          category: booksObj[bookId][0].category,
        }));
        return { ...state, books };
      })
      .addCase(postBook.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.books = [action.payload.data, ...IsFulfilled.books];
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const filteredBooks = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
        return { ...state, books: filteredBooks };
      });
  },
});

export default booksSlice.reducer;
