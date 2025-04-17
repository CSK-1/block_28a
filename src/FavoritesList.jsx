function FavoritesList({favRecipes, setFavRecipes}){

    return(
        <>
        {
            recipes.map((recipe)=>
                <div key={recipe.idMeal}>
                    <img src={recipe?.strMealThumb} style={{height: "400px"}}/>
                    <h2>{recipe.strMeal}</h2>
                </div>
            )
        }
        </>
    )
}

export default FavoritesList