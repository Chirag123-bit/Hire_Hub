import React from "react";
import {
  SearchbarWrap,
  Searchicon,
  SearchInput,
  ContentWrap,
} from "./Components";

function SearchBar({ value, changeInput }) {
  return (
    <SearchbarWrap>
      <ContentWrap>
        <Searchicon />
        <SearchInput
          type="text"
          placeholder="Search Here"
          value={value}
          onChange={changeInput}
        />
      </ContentWrap>
    </SearchbarWrap>
  );
}

export default SearchBar;
