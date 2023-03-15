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
          <h1 style={{color: 'aqua'}}> Pharmacy </h1> 
          
        </Link>
        <div className="navlinks">
          <NavLink to="/departments" style={{color: '#050', fontWeight: "bolder", background: "yellow" }}> Pharmacy Departments</NavLink>
          <NavLink to="/portal" style={{color: '#050', fontWeight: "bolder", background: "yellow" }}> {user ? "Portal" : null}</NavLink>
          <br></br>
          <br></br>
          {user ? (
            <NavLink to="/" onClick={handleLogout} style={{color: '#050', fontWeight: "bolder", background: "yellow" }}> 
              Log Out
            </NavLink>
          ) : (
            <NavLink to="/login" style={{color: '#050', fontWeight: "bolder", background: "yellow" }}> Login Here </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
