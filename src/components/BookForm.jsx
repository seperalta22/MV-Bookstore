const BookForm = () => (
  <div>
    <h3 className="book-title">ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);
export default BookForm;
