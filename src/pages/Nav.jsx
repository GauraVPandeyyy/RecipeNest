import { NavLink } from "react-router-dom";

const Nav = () => {
  const linkClass = ({ isActive }) =>
    `text-base md:text-lg font-medium transition-colors duration-200 ${
      isActive ? "text-orange-600" : "text-gray-600 hover:text-orange-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-orange-500 hidden md:block">🍽️ RecipeNest</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/create" className={linkClass}>Create</NavLink>
          <NavLink to="/recipes" className={linkClass}>Recipes</NavLink>
          <NavLink to="/favorite" className={linkClass}>Favorites</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
