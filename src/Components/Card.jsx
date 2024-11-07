import { Link, useLocation } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

const Card = ({ coffee, handelRemove }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee;
  const { pathname } = useLocation();

  return (
    <div>
      <Link to={`/coffee/${id}`}>
        <div className="card bg-base-100 w-96 shadow-xl ">
          <figure className="w-full h-52 rounded-lg p-4 overflow-hidden">
            <img className="rounded-lg" src={image} alt="Coffee" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2lg font-bold">{name}</h2>
            <p className="text-lg font-semibold">Category: {category}</p>
            <div className="flex  flex-grow">
              <p className="text-lg font-medium">Type: {type}</p>
              <p className="text-lg font-semibold">Origin: {origin}</p>
            </div>
            <div className="flex  flex-grow">
              <p className="text-lg font-semibold">Rating: {rating}</p>
              <p className="text-lg font-semibold">Popularity: {popularity}</p>
            </div>
          </div>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handelRemove(id)}
          className="absolute top-[18rem] right-[68rem] p-2 bg-warning rounded-full cursor-pointer"
        >
          <IoTrashBin size={15}></IoTrashBin>
        </div>
      )}
    </div>
  );
};

export default Card;
