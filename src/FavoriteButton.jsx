function FavoriteButton ({recipe, token}) {
    async function handleClick(recipe) {

        console.log(JSON.stringify({
            idMeal: recipe.idMeal,
            strMeal: recipe.strMeal,
            mealId: recipe.idMeal,
            name: recipe.strMeal,
            imageUrl: recipe.strMealThumb,
            strArea: recipe.strArea
        }))

        try{
            const response = await fetch("https://fsa-recipe.up.railway.app/api/favorites",
                {
                    method: "POST",
                    headers:{
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                            idMeal: recipe.idMeal,
                            strMeal: recipe.strMeal,
                            mealId: recipe.idMeal,
                            name: recipe.strMeal,
                            imageUrl: recipe.strMealThumb,
                            strArea: recipe.strArea
                        })
                }
            )
            const result = await response.json()
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <button onClick={() => handleClick(recipe)}>Favorite</button>
    )
}

export default FavoriteButton