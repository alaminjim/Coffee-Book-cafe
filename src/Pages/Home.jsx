import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Heading from "../Components/Heading/Heading";
import Categories from "../Components/Categories";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <div>
        <Banner></Banner>
        <Heading
          title={"Browse Coffee By Category "}
          subtitle={
            "Choose your desired coffee category to browse through specific coffees that fit in your taste"
          }
        ></Heading>
        <Categories categories={categories}></Categories>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
