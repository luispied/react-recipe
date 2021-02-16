import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, count) => (
          <li key={count + 1
          }>{ingredient.text}</li>
        ))}
      </ul>
      <h3>Calories</h3>
      <p>{calories}</p>
      <img className={style.image} src={image} alt={title} />
    </div>
  );
};

export default Recipe;
