import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Header from "./components/headerComponent";
import iconImg from "./react-recipe-finder/cutlery-svgrepo-com.svg";
import bgImgAlt from "./react-recipe-finder/food-svgrepo-com (1).svg";

import {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText,
  Placeholder,
  SeeNewTab,
} from "./components/recipeComponent";
import Axios from "axios";

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  console.log(props);
  const { recipeObj } = props;
  return (
    <>
      <RecipeContainer>
        <Dialog open={show} aria-labelledby="simple-dialog-title">
          <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
          <DialogContent>
            <RecipeName>{recipeObj.label}</RecipeName>
            <table>
              <thead>
                <th>Ingredients</th>
                <th>Weight (In Grams)</th>
              </thead>
              <tbody>
                {recipeObj.ingredients.map((ingredientObj) => (
                  <tr className="ingredient-list">
                    <td align="center">{ingredientObj.text}</td>
                    <td align="center">{Math.round(ingredientObj.weight)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <SeeNewTab onClick={() => window.open(recipeObj.url)}>
              See More
            </SeeNewTab>
            <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
          </DialogActions>
        </Dialog>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

const APP_ID = "6e89be1d";
const APP_KEY = "b2862808995a1b8aee5c836c6f23b316";

function App() {
  const [timeOutId, updateTimeOut] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(response);
    updateRecipeList(response.data.hits);
  };
  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeOut(timeOut);
  };

  return (
    <Header.Container>
      <Header.HeaderComponent>
        <Header.AppNameComponent>
          <Header.AppIcon
            // src="/react-recipe-finder/cutlery-svgrepo-com.svg"
            src={iconImg}
            alt="App Icon"
          />
          Recipe Finder App
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon
            src="/react-recipe-finder/search-icon.svg"
            alt="search icon"
          />
          <Header.SearchInput
            placeholder="Search Recipe"
            onChange={onTextChange}
          />
        </Header.SearchComponent>
      </Header.HeaderComponent>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder
            // src="/react-recipe-finder/ice-cream-dessert-svgrepo-com.svg"
            src={bgImgAlt}
            alt="Background"
          />
        )}
      </RecipeListContainer>
    </Header.Container>
  );
}

export default App;
