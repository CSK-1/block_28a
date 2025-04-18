function DetailsButton({ recipeId, setRecipeDetails }) {

	async function handleClick() {
		try {
			const response = await fetch(
				`https://fsa-recipe.up.railway.app/api/recipes/${recipeId}`
			);
			const jsonResponse = await response.json();
			setRecipeDetails(jsonResponse);
		} catch (error) {
			console.log(error);
		}
	}

	return <button onClick={() => handleClick()}>Get Details</button>;
}

export default DetailsButton;
