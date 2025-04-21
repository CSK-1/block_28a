import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

function RecipeList({ recipes, token, recipe }) {

	let favButton = (
		<></>
	)

	if (!!token) {
		favButton = (
			<FavoriteButton recipe={recipe} token={token} />
		)
	}

	return (
		<>
			{recipes.map((recipe) => (
				<div key={recipe.idMeal}>
					<img src={recipe?.strMealThumb} style={{ height: "400px" }} />
					<h2>{recipe.strMeal}</h2>
					<Link to={`/recipe/${recipe.idMeal}`}>Get Details</Link>
					{favButton}
				</div>
			))}
		</>
	);
}

export default RecipeList;
