import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FavoritesList({token}){
	const [favRecipes, setFavRecipes] = useState([]);

    useEffect(() => {
		const getFavRecipes = async () => {
			const res = await fetch("https://fsa-recipe.up.railway.app/api/favorites",
                {
                    method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
            );
			const jsonBody = await res.json();
            const data = jsonBody.data;

			setFavRecipes(data);
		};
		getFavRecipes();
	}, []);

    return (
        <>
            {[...new Map(favRecipes.map(recipe => [recipe.idMeal, recipe])).values()].map(recipe => (
                <div key={recipe.idMeal}>
                    <img src={recipe?.strMealThumb} style={{ height: "400px" }} />
                    <h2>{recipe.strMeal}</h2>
                    <Link to={`/recipe/${recipe.idMeal}`}>Get Details</Link>
                </div>
            ))}
        </>
    );    
}

export default FavoritesList