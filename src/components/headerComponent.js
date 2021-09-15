import styled from "styled-components";

const HeaderComponent = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font: 20p;
  font-weight: bold;
  box-shadow: 0px 3px 6px 0 #555;
  align-items: center;
  justify-content: space-between;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;

const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;
const SearchInput = styled.input`
  border: none;
  outine: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const foo = {
  SearchInput,
  SearchComponent,
  SearchIcon,
  AppIcon,
  AppNameComponent,
  HeaderComponent,
  Container,
};
export default foo;
