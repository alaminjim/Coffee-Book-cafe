import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const navigate = useNavigate();

  const coffeeCard = useLoaderData();

  const { category } = useParams();

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCoffee = [...coffeeCard].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterByCoffee);
    } else {
      setCoffees(coffeeCard.slice(0, 6));
    }
  }, [coffeeCard, category]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-10 py-10">
        {coffees.map((coffee) => (
          <Card coffee={coffee}></Card>
        ))}
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/coffees")}>
        View All
      </button>
    </div>
  );
};

export default CoffeeCards;
