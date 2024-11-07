import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((categories) => (
          <NavLink
            key={categories.category}
            to={`/category/${categories.category}`}
            role="tab"
            className={({ isActive }) =>
              `tab text-2xl font-thin ${isActive ? "tab-active" : ""}`
            }
          >
            {categories.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
