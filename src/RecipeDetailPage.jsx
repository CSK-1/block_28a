import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function RecipeDetails({ token }) {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const res = await fetch(
					`https://fsa-recipe.up.railway.app/api/recipes/${id}`
				);
				const data = await res.json();
				setRecipe(data);
			} catch (err) {
				console.error("Failed to fetch recipe", err);
			}
		};

		fetchRecipe();
	}, [id]);

	if (!recipe) {
		return <></>;
	}

    let favButton = (
		<></>
	)

	if (!!token) {
		favButton = (
			<FavoriteButton recipe={recipe} token={token} />
		)
	}

	return (
		<div key={recipe.idMeal}>
			<img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ height: "400px" }} />
			<h2>{recipe.strMeal}</h2>
			<p>Category: {recipe.strCategory}</p>
			<p>Origin: {recipe.strArea}</p>
			<p>{recipe.strInstructions}</p>
			{favButton}
		</div>
	);
}

export default RecipeDetails;
