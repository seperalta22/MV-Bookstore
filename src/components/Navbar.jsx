import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <header className="header">
    <h1>Bookstore CMS</h1>
    <nav>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </nav>

    <div className="user">{/* TODO */}</div>
  </header>
);

export default Navbar;
