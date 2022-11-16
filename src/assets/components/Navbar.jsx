import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray text-white p-2 h-12 w-full flex items-center">
      <Link className="mr-4" to="/">
        Asociaciones
      </Link>

      <div className="flex gap-2">
        <NavLink
          className={({ isActive }) => `hover:underline ${isActive ? "text-primary" : ""}`}
          to="/marvel"
        >
          Marvel
        </NavLink>

        <NavLink
          className={({ isActive }) => `hover:underline ${isActive ? "text-primary" : ""}`}
          to="/dc"
        >
          DC
        </NavLink>

        <NavLink
          className={({ isActive }) => `hover:underline ${isActive ? "text-primary" : ""}`}
          to="/search"
        >
          Search
        </NavLink>
      </div>

      <div className="flex gap-2 w-full justify-content-end">
        <ul className="ml-auto">
          <span className="text-primary">Luis Olmos</span>

          <button className="ml-2">Logout</button>
        </ul>
      </div>
    </nav>
  );
};
