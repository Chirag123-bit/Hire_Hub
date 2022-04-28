import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export const SearchbarWrap = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.26);
  padding: 1.5rem 1rem;
`;
export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  margin: auto;
  border-radius: 2rem;
  border: 1px solid #045de9;
`;

export const Searchicon = styled(SearchIcon)`
  color: rgba(0, 0, 0, 0.26);
  margin-right: 2rem;
  margin-left: 1rem;
`;

export const SearchInput = styled.input`
  font-size: 1.5rem;
  outline: none;
  border: none;
  /* width: 100%; */
  font-family: "Raleway", sans-serif;
  color: #045de9;
  &::placeholder {
    color: rgba(0, 0, 0, 0.26);
  }
`;
