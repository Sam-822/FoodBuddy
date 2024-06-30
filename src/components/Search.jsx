import React, { useEffect, useState } from "react";
import ReciepeItem from "./ReciepeItem";

const Search = () => {
	const [query, setQuery] = useState({name: '', ingredient:''})
	const handleChange = (e) => {
	setQuery( {...query, [e.target.name]: e.target.value });
	};
	const [reciepe, setReciepe] = useState([]);
	const fetchreciepe = async () => {
		const url = `https://themealdb.com/api/json/v1/1/search.php?s=${query.name}`;
		const data = await fetch(url);
		const parsedData = await data.json();
		setReciepe(await parsedData.meals);
	};

	const fetchIngredient = async() =>{
		const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query.ingredient}`
		const data = await fetch(url);
		const parsedData = await data.json();
		setReciepe(await parsedData.meals);
	}
	const handleNameClick = () => {
		fetchreciepe();
	};
	const handleIngredientClick = () => {
		fetchIngredient();
	}
	return (
		<div className="container my-5 ">
			<div className="row">
				<div className="col">

					<h2>Search by names</h2>
					<div className="input-group mb-3 custom-input">
						<input type="text" name='name' className="form-control" placeholder="Find Reciepes." aria-label="Enter Dish" aria-describedby="button-addon2" value={query.name} onChange={handleChange} />
						<button type="button" className="btn btn-primary" onClick={handleNameClick}>Search</button>
					</div>
				</div>
				<div className="col">
				<h2>Search by Ingrediants</h2>
					<div className="input-group mb-3 custom-input">
						<input type="text" name='ingredient' className="form-control" placeholder="Find Ingredients." aria-label="Enter Dish" aria-describedby="button-addon2" value={query.ingredient} onChange={handleChange} />
						<button type="button" className="btn btn-primary" onClick={handleIngredientClick}>Search</button>
					</div>
				</div>
			</div>

			<div className="container d-flex justify-content-around" style={{ flexWrap: 'wrap' }}>
				{reciepe &&
					reciepe.map((element) => {
						return (
							<ReciepeItem
								key={element.idMeal}
								id={element.idMeal}
								title={element.strMeal}
								image={element.strMealThumb}
							/>
						);
					})}
					{!reciepe && <h3>No Reciepes to show</h3>}
			</div>
		</div>
	);
};

export default Search;
