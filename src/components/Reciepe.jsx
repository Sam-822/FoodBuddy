import React, { useEffect, useState } from 'react'
import ReciepeItem from './ReciepeItem';

const Reciepe = (props) => {
	const { cuisine } = props;
	const [reciepe, setReciepe] = useState([])
	
	const url= `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
	const fetchData = async() =>{
		const data = await fetch(url);
		const parsedData = await data.json();
		// console.log('parseddata', parsedData.results);
		setReciepe(await parsedData.meals)
		// console.log(reciepe)
	}
	useEffect(() => {
		fetchData()
	},[]);
	
	return (
		<div className='container d-flex justify-content-evenly' style={{flexWrap:'wrap'}}>
			{reciepe.map((element)=>{
				return(
					<ReciepeItem key={element.idMeal} id ={element.idMeal} title={element.strMeal} image={element.strMealThumb} />
				)
			})}
		</div>
	)
}

export default Reciepe
