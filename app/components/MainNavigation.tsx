import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Beranda</NavLink>
        </li>
        <li className="nav-item">
          <a href="https://github.com/farizmamad">Sumber Kode</a>
        </li>
      </ul>
    </nav>
  );
}