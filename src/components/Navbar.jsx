import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-gray text-white font-medium px-6 py-2 h-12 w-full flex items-center">
      <div className="flex gap-2">
        <NavLink
          className={({ isActive }) =>
            `hover:underline ${isActive ? "text-primary" : ""}`
          }
          to="/marvel"
        >
          Marvel
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `hover:underline ${isActive ? "text-primary" : ""}`
          }
          to="/dc"
        >
          DC
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `hover:underline ${isActive ? "text-primary" : ""}`
          }
          to="/search"
        >
          Search
        </NavLink>
      </div>

      <div className="flex gap-2 w-full justify-content-end">
        <ul className="ml-auto">
          <span className="text-primary">Luis Olmos</span>

          <button className="ml-2" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
