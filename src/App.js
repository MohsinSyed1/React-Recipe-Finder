import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Header from "./components/headerComponent";

import {
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText,
  Placeholder,
} from "./components/recipeComponent";
import Axios from "axios";

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  console.log(props);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
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
          <Header.AppIcon src="/react-recipe-finder/hamburger.svg" />
          Recipe Finder
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon src="/react-recipe-finder/search-icon.svg" />
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
          <Placeholder src="/react-recipe-finder/hamburger.svg" />
        )}
      </RecipeListContainer>
    </Header.Container>
  );
}

export default App;
