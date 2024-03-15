import { NavLink } from "react-router-dom";
import css from "./header.module.css";

const Header = () => {
  return (
    <header>
      <h1>
        <span className={css.first}>P</span>eople
      </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shifts"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? "active" : ""
          }
        >
          Shifts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
