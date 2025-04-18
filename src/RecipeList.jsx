import { useState } from "react";
import DetailsButton from "./DetailsButton";
import FavoriteButton from "./FavoriteButton";

function RecipeList({ recipes, token }) {
	const [recipe, setRecipe] = useState();

	let recipeList = (
		<>
			{recipes.map((recipe) => (
				<div key={recipe.idMeal}>
					<img src={recipe?.strMealThumb} style={{ height: "400px" }} />
					<h2>{recipe.strMeal}</h2>
					<FavoriteButton recipe={recipe} token={token} />
					<DetailsButton
						recipeId={recipe.idMeal}
						setRecipeDetails={setRecipe}
					/>
				</div>
			))}
		</>
	);

	if (!!recipe) {
		recipeList = (
			<>
				<div key={recipe.idMeal}>
					<img src={recipe.strMealThumb} style={{ height: "400px" }} />
					<h2>{recipe.strMeal}</h2>
					<p>{recipe.strCategory}</p>
					<p>{recipe.strArea}</p>
					<p>{recipe.strInstructions}</p>
					<p>{recipe.ingredients}</p>
					<FavoriteButton recipe={recipe} token={token} />
				</div>
			</>
		);
	}

	return <>{recipeList}</>;
}

export default RecipeList;
