import { setItems } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const DishMenu = () => {
  const dishesArray = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  async function getDishList() {
    const dishes = await fetch(
      "http://localhost:1337/api/dishes?populate=image"
    );
    const dishesJson = await dishes.json();
    dispatch(setItems(dishesJson.data));
  }

  useEffect(() => {
    getDishList();
    console.log(dishesArray);
  }, []);

  return <div>Dish menu </div>;
};

export default DishMenu;
