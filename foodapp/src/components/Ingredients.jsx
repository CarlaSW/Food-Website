import styles from "./ingredients.module.css";

export default function Ingredients({ ingredient }) {
  return (
    <div className={styles.ingredient}>
      <div className={styles.ingImage}>
        <img
          src={
            `https://spoonacular.com/cdn/ingredients_100x100/` +
            ingredient.image
          }
        ></img>
      </div>
      <div className={styles.ingredientInfo}>
        <p>{ingredient.name}</p>
        <p>
          {ingredient.amount} {ingredient.unit}
        </p>
      </div>
    </div>
  );
}
