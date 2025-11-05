import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main">
      {/* Desktop Links */}
      <div className={`links ${open ? "open" : ""}`}>
        <Link to="/one" className="mo" onClick={() => setOpen(false)}>
          One
        </Link>
        <Link to="/second" className="mo" onClick={() => setOpen(false)}>
          Second
        </Link>
      </div>

      {/* Hamburger for Mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? "bar1" : ""}`}></div>
        <div className={`bar ${open ? "bar2" : ""}`}></div>
        <div className={`bar ${open ? "bar3" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
