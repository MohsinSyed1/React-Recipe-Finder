import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0px 3px 10px 0 #aaa;
`;
export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const RecipeName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: black;
  font-weight: bold;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  width: 350px;
  height: 350px;
  margin: 50px;
  opacity: 50%;
`;

export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;
