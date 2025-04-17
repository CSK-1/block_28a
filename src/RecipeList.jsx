import FavoriteButton from "./FavoriteButton";

function RecipeList({ recipes, token }) {

	return (
		<>
			{recipes.map((recipe) => (
				<div key={recipe.idMeal}>
					<img src={recipe?.strMealThumb} style={{ height: "400px" }} />
					<h2>{recipe.strMeal}</h2>
                    <FavoriteButton recipe={recipe} token={token} />
				</div>
			))}
		</>
	);
}

export default RecipeList;
