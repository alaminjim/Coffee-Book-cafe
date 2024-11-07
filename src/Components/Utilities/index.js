// get item

import toast from "react-hot-toast";

const getFavorites = () => {
  const allFavorite = localStorage.getItem("favorites");
  if (allFavorite) {
    const favorite = JSON.parse(allFavorite);
    return favorite;
  } else {
    return [];
  }
};

// add item

const addFavorite = (coffees) => {
  const favorites = getFavorites();
  const isExist = favorites.find((item) => item.id == coffees.id);
  if (isExist) {
    return toast.error("Coffee already exist");
  }
  favorites.push(coffees);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully Added!");
};

// remove item

const removeItem = (id) => {
  const favorites = getFavorites();
  const remaining = favorites.filter((coffee) => coffee.id != id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
};

export { addFavorite, getFavorites, removeItem };
