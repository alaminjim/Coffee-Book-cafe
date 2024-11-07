import { useEffect, useState } from "react";
import Heading from "../Components/Heading/Heading";
import { getFavorites, removeItem } from "../Components/Utilities";
import Card from "../Components/Card";

const Dashboard = () => {
  const [favoriteCoffee, setFavoriteCoffee] = useState([]);
  useEffect(() => {
    const allCoffee = getFavorites();
    setFavoriteCoffee(allCoffee);
  }, []);
  const handelRemove = (id) => {
    removeItem(id);
    const allCoffee = getFavorites();
    setFavoriteCoffee(allCoffee);
  };
  return (
    <div>
      <Heading
        title={"Welcome To Dashboard"}
        subtitle={
          "Manage Coffees that you have previously added as favorite. You Can view and remove them from here"
        }
      ></Heading>
      <div className="grid grid-cols-3 gap-10 py-10">
        {favoriteCoffee.map((coffee) => (
          <Card handelRemove={handelRemove} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
