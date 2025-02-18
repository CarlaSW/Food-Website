import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  function handleViewRecepieButton(food) {
    setFoodId(`${food.id}`);
  }
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="food-img"></img>
      <div className={styles.itemInfo}>
        <p className={styles.itemTitle}>{food.title}</p>
        <button
          onClick={() => {
            handleViewRecepieButton(food);
          }}
          className={styles.ViewRecepieButton}
        >
          View the Receipe
        </button>
      </div>
    </div>
  );
}
