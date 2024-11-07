import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-warning" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-warning" : ""}`
          }
          to="/coffees"
        >
          Coffees
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-warning" : ""}`
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar backdrop-blur-lg fixed z-50 bg-white/30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold">COFFEE_BOOK</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu text-lg font-semibold menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Navbar;
