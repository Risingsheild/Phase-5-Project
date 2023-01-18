import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar({ user, setUser }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">
          <h1> Pharmacy </h1>
        </Link>
        <div className="navlinks">
          <NavLink to="/departments"> Pharmacy Departments </NavLink>
          <NavLink to="/portal"> {user ? "Portal" : null}</NavLink>
          {user ? (
            <NavLink to="/" onClick={handleLogout}>
              Log Out
            </NavLink>
          ) : (
            <NavLink to="/login"> Login Here </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
