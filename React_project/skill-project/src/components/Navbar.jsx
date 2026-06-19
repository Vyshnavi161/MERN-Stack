import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { dark, setDark } = useContext(ThemeContext);
  const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);
  

  return (
    <nav>
      <h2>SkillHub</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li onClick={() => setOpen(!open)}>
          Courses ▼

          {open && (
            <div className="dropdown">
              <p>React</p>
              <p>Java</p>
              <p>Node JS</p>
            </div>
          )}
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {currentUser && (
  <li>
    <Link to="/mylearning">My Learning</Link>
  </li>
)}

        {currentUser ? (
  <>
    <li>Welcome, {currentUser.name}</li>

    <li>
      <button
        onClick={() => {
          localStorage.removeItem("currentUser");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </li>
  </>
) : (
  <>
    <li>
      <Link to="/login">Login</Link>
    </li>
    
    <li>
      <Link to="/register">Register</Link>
    </li>
  </>
)}
      </ul>

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

export default Navbar;