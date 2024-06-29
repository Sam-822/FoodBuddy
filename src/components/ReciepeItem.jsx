import React, { useEffect, useState } from "react";

const ReciepeItem = (props) => {
  const { id, title, image } = props;
  const [source, setSource] = useState("");
  const [ytSource, setYtSource] = useState("");
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [finalIngrediants, setFinalIngrediants] = useState({});

  const showReciepe = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setSource(parsedData.meals[0].strSource);
    setTags(parsedData.meals[0].strTags);
    setYtSource(parsedData.meals[0].strYoutube);
    setCategory(parsedData.meals[0].strCategory);
    // transformIngredients(parsedData.meals[0]);
    let ingredients = {};
    for (let i = 1; i <= 20; i++) {
      const ingredient = parsedData.meals[0][`strIngredient${i}`];
      const measure = parsedData.meals[0][`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients[ingredient] = measure;
      }
    }
    setFinalIngrediants(ingredients);
  };

  // const  transformIngredients = (response) => {
  // 	for (let i = 1; i <= 20; i++) {
  // 		const ingredient = response[`strIngredient${i}`];
  // 		const measure = response[`strMeasure${i}`];

  // 		if (ingredient && ingredient.trim() !== "") {
  // 			ingredients[ingredient] = measure;
  // 		}
  // 	}
  // }

  useEffect(() => {
    showReciepe(id);
    {
      Object.entries(finalIngrediants).map(([ingredient, measure]) =>
        console.log(ingredient, measure)
      );
    }
  }, [id]);

  if (source) {
    return (
      <>
        <div className="card my-3" style={{ width: "19rem" }}>
          <img src={image} className="card-img-top" width={"18rem"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {category && (
              <p className="card-text">
                <b>Category:</b> {category}
              </p>
            )}
            {tags && (
              <p className="card-text">
                <b>Tags:</b> {tags}
              </p>
            )}
            <div className="container d-flex justify-content-around align-items-center" style={{flexWrap:'wrap', width:'100%'}}>
              {source && (
                <a
                  href={source}
                  target="_blank"
                  className="btn btn-primary "
                >
                  Source Link
                </a>
              )}
              {ytSource && (
                <a
                  href={ytSource}
                  target="_blank"
                  className="btn btn-danger "
                >
                  Video Tutorial
                </a>
              )}
              <button
                type="button"
                className="btn btn-primary mx-2 my-2"
                data-bs-toggle="modal"
                data-bs-target={`#example${id}`}
              >
                Ingredients
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id={`example${id}`}
          tabIndex="-1"
          aria-labelledby={`example${id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-3" id="exampleModalLabel">
                  {title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul>
                  <h3 className="fs-4">Recipe Ingredients</h3>
                  {Object.entries(finalIngrediants).map(
                    ([ingredient, measure]) => (
                      <li key={ingredient}>{`${ingredient}: ${measure}`}</li>
                    )
                  )}
                  {/* <li>{finalIngrediants[0]}</li> */}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ReciepeItem;
