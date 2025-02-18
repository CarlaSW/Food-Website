import { useEffect, useState } from "react";
import FoodList from "./FoodList";
import styles from "./search.module.css";

const apiKey = import.meta.env.VITE_API_KEY;

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = apiKey;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      //console.log("data.results : ", data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  //console.log("here is the array:", foodData);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchBar}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        value={query}
      ></input>
    </div>
  );
}
