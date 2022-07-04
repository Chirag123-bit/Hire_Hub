import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

export const SearchbarWrap = styled.div`
  /* border-bottom: 1px solid white; */
  padding: 1.5rem 1rem;
`;
export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  margin: auto;
  border-radius: 2rem;
  border: 1px solid white;
  backdrop-filter: blur(20px);
`;

export const Searchicon = styled(SearchIcon)`
  color: white;
  margin-right: 2rem;
  margin-left: 1rem;
`;

export const SearchInput = styled.input`
  font-size: 1.5rem;
  outline: none;
  border: none;
  width: 100%;
  border-radius: 2rem;
  font-family: "Raleway", sans-serif;
  backdrop-filter: blur(20px);
  background: transparent;
  caret-color: white;
  color: white;
  padding-left: 0.2rem;
  &::placeholder {
    color: white;
  }
`;
