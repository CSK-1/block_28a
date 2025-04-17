function FavoritesList({favRecipes, setFavRecipes}){

    return(
        <>
        {
            recipes.map((recipe)=>
                <div key={recipe.idMeal}>
                    <img src={recipe?.strMealThumb} style={{height: "400px"}}/>
                    {/* question mark there is shorthand for "if image is not there, do not render it" */}
                    <h2>{recipe.strMeal}</h2>
                </div>
            )
        }
        </>
    )
}

export default FavoritesList