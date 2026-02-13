import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">My Portfolio</div>

      <div className="nav-links">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
      </div>
    </div>
  );
}
