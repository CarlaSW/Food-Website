import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import Ingredients from "./Ingredients";
const apiKey = import.meta.env.VITE_API_KEY;

export default function FoodDetails({ foodId, setFoodId }) {
  const [recepie, setRecepie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //console.log(typeof foodId);
  //console.log(foodId);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = apiKey;
  useEffect(() => {
    async function fetchRecepie() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      //console.log("the recepie:");
      //console.log(data);
      setRecepie(data);
      setIsLoading(false);
    }
    fetchRecepie();
  }, [foodId]);
  console.log(recepie);

  return (
    <div className={styles.foodDetailsContainer}>
      <div>
        <h2> {recepie.title}</h2>
        <img className={styles.foodImage} src={recepie.image}></img>
      </div>

      <div className={styles.recepieInfo}>
        <span className={styles.info}>⌚{recepie.readyInMinutes} Minutes</span>
        <span className={styles.info}>👨‍👩‍👧‍👦Serves {recepie.servings} </span>
        <span className={styles.info}>
          {recepie.vegetarian ? "🥕Vegetarian" : "🥩Non-vegetarian"}
        </span>
        <span className={styles.info}>{recepie.vegan ? "🐄Vegan" : ""}</span>
      </div>

      <p className={styles.recepiePrice}>
        ${(recepie.pricePerServing / 10).toFixed(2)} Per Serving
      </p>

      <h3>Ingredients</h3>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          recepie.extendedIngredients.map((ingredient) => {
            return <Ingredients key={ingredient.id} ingredient={ingredient} />;
          })
        )}
      </div>

      <div className={styles.instructions}>
        <h3>Instructions</h3>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ol>
              {recepie.analyzedInstructions[0].steps.map((step) => {
                return <li key={step.number}>{step.step}</li>;
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
