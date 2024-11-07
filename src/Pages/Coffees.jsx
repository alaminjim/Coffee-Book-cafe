import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

const Coffees = () => {
  const coffee = useLoaderData();
  const [coffeeSort, setCoffeeSort] = useState(coffee);

  const handelSorted = (sortBy) => {
    if (sortBy == "popularity") {
      const sorted = [...coffee].sort((a, b) => b.popularity - a.popularity);
      setCoffeeSort(sorted);
    } else if (sortBy == "rating") {
      const sorted = [...coffee].sort((a, b) => b.rating - a.rating);
      setCoffeeSort(sorted);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl font-bold">
            Short Coffees by popularity & Rating{" "}
          </p>
        </div>
        <div className="space-x-5">
          <button
            onClick={() => handelSorted("popularity")}
            className="btn btn-warning text-white"
          >
            Short by popularity
          </button>
          <button
            onClick={() => handelSorted("rating")}
            className="btn btn-warning text-white"
          >
            Short by Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 py-10">
        {coffeeSort.map((coffee) => (
          <Card coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
