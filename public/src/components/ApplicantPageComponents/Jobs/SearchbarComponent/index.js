import {
  ContentWrap,
  SearchbarWrap,
  Searchicon,
  SearchInput,
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
