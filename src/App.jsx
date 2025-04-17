import { useState, useEffect } from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import { Routes, Route, Link } from "react-router-dom";
import LogIn from "./LogInForm";
import Register from "./RegisterForm";
import FavoritesList from "./FavoritesList";

function App() {
	const [recipes, setRecipes] = useState([]);
	const [token, setToken] = useState();
	const [favRecipes, setFavRecipes] = useState([]);

	useEffect(() => {
		const getRecipes = async () => {
			const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes");
			const data = await res.json();

			setRecipes(data);
		};
		getRecipes();
	}, []);

	let navBar = (
    <>
		<Link to="/login">Log In</Link>
		<Link to="/register">Sign Up</Link>
    </>
	)

  if(!!token){
    navBar = <Link to="/favorites">Favorites</Link>
  }

	return (
		<>
			<nav style={{ display: "flex", justifyContent: "space-between" }}>
				<Link to="/">Home</Link>
				{navBar}
			</nav>
			<h1>Recipes</h1>
			<Routes>
				<Route
					path="/"
					element={<RecipeList recipes={recipes} token={token} />}
				/>
				<Route path="/login" element={<LogIn setToken={setToken} />} />
				<Route path="/register" element={<Register setToken={setToken} />} />
        		<Route path="/favorites" element={<FavoritesList setFavRecipes={setFavRecipes} favRecipes={favRecipes} />} />
			</Routes>
		</>
	);
}

export default App;
