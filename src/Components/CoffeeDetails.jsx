import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImage from "../assets/nutrition.png";
import { addFavorite, getFavorites } from "./Utilities";

const CoffeeDetails = () => {
  const { id } = useParams();

  const coffeeDetails = useLoaderData();
  const [singleCoffee, setSingleCoffee] = useState({});
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    const singleCoffeeDetails = coffeeDetails.find(
      (coffee) => coffee.id === parseInt(id)
    );
    setSingleCoffee(singleCoffeeDetails);
    const disabledBtn = getFavorites();
    const isExist = disabledBtn.find((item) => item.id == singleCoffee.id);
    if (isExist) {
      setDisabled(true);
    }
  }, [coffeeDetails, id]);
  const {
    name,
    image,
    ingredients,
    nutrition_info,
    description,
    making_process,
    rating,
    popularity,
  } = singleCoffee;

  const handelFavorite = (coffees) => {
    addFavorite(coffees);
    setDisabled(true);
  };

  return (
    <div className="my-10">
      <h1 className="text-4xl font-thin mb-6">{description}</h1>
      <div className="w-full h-full  object-cover overflow-hidden rounded-xl shadow-xl">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          disabled={disabled}
          onClick={() => handelFavorite(singleCoffee)}
          className="btn btn-warning text-white"
        >
          Add To Favorite
        </button>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg font-semibold">Rating: {rating}</p>
        <p className="text-lg font-semibold">Popularity: {popularity}</p>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold">Making Process:</h1>
        <p className="text-xl font-semibold">{making_process}</p>
      </div>
      <div className="my-8 flex justify-between items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-2xl font-bold"> Ingredients:</h1>
            <ul className="text-xl ml-9 mt-3">
              {ingredients &&
                ingredients.map((i, j) => (
                  <li key={j} className="list-disc">
                    {i}
                  </li>
                ))}
            </ul>

            <h1 className="text-2xl font-bold">Nutrition:</h1>
            <ul className="text-xl ml-9 mt-3">
              {nutrition_info &&
                Object.keys(nutrition_info).map((n) => (
                  <li className="list-disc">
                    {n}: {nutrition_info[n]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <img className=" h-[496px]" src={nutritionImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
