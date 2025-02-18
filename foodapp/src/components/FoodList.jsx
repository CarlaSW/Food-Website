import FoodItem from "./FoodItem";
import styles from "./foodList.module.css";

export default function FoodList({ foodData, setFoodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => {
        return <FoodItem key={food.id} food={food} setFoodId={setFoodId} />;
      })}
    </div>
  );
}
