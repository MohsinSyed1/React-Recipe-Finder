import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  box-shadow: 0px 3px 10px 0 #aaa;
`;
export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const RecipeName = styled.div`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin: 10p 0;
`;
export const IngredientsText = styled.div`
  font-size: 18px;
  border: solid 1px green;
  border-radius: 3px;
  color: green;
  font-weight: bold;
  margin: 10p 0;
  cursor: pointer;
  padding: 10px 15px;
  text-align: center;
  margin-bottom: 12px;
`;

export const SeeMoreText = styled.div`
  color: #eb3300;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;
