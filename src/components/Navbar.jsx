import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <header className="header">
    <nav>
      <NavLink id="logo" to="/">
        <h1>Bookstore CMS</h1>
      </NavLink>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </nav>

    <div className="user">
      <img src="user.svg" alt="" />
    </div>
  </header>
);

export default Navbar;
