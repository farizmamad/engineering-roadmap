import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Beranda</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/program">Program Studi</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ask">Tanya Saintek</NavLink>
        </li>
      </ul>
    </nav>
  );
}