import React, { useEffect, useState } from "react";
import FilterPanel from "../FilterPanelComponent";
import ListComponent from "../ListComponent";
import SearchBar from "../SearchbarComponent";
import {
  ContentHolder,
  HomePanalListWrap,
  HomePanalWrap,
  ListWrap,
} from "./JobComponents";
import { dataList } from "../SearchbarComponent/Constants";
import { SearchInput } from "../SearchbarComponent/Components";

function SeekerJobs() {
  const [selectedType, setSelectedType] = useState(null);
  const handleSelectType = (event, value) => {
    return !value ? null : setSelectedType(value);
  };

  const [inputSearch, setInputSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState([
    {
      id: 1,
      checked: false,
      label: "Technology",
    },
    {
      id: 2,
      checked: false,
      label: "Health",
    },
    {
      id: 3,
      checked: false,
      label: "Education",
    },
    {
      id: 4,
      checked: false,
      label: "Service",
    },
    {
      id: 5,
      checked: false,
      label: "Finance",
    },
    {
      id: 6,
      checked: false,
      label: "Entertainment",
    },
  ]);

  const handleChangeChecked = (id) => {
    const changeCheckedCategory = selectedCategory.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setSelectedCategory(changeCheckedCategory);
  };

  const [selectedPrice, setSelectedPrice] = useState([0, 100]);

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const [list, setList] = useState(dataList);

  const applyFilter = () => {
    let updatedList = dataList;

    if (selectedType) {
      updatedList = updatedList.filter((item) => item.type === selectedType);
    }

    const categoryChecked = selectedCategory
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (categoryChecked.length > 0) {
      updatedList = updatedList.filter((item) =>
        categoryChecked.includes(item.category)
      );
    }

    const minPrice = selectedPrice[0] * 1000;
    const maxPrice = selectedPrice[1] * 1000;

    updatedList = updatedList.filter(
      (item) => item.sallary >= minPrice && item.sallary <= maxPrice
    );

    if (country !== "") {
      updatedList = updatedList.filter(
        (item) => item.company_country === country
      );
    }

    if (region !== "") {
      updatedList = updatedList.filter(
        (item) => item.company_region === region
      );
    }

    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);
  };

  useEffect(() => {
    applyFilter();
  }, [
    selectedType,
    selectedCategory,
    selectedPrice,
    country,
    region,
    inputSearch,
  ]);
  return (
    <div id="jobs">
      <ContentHolder>
        <SearchBar
          value={inputSearch}
          changeInput={(e) => setInputSearch(e.target.value)}
        />
        <HomePanalListWrap>
          <HomePanalWrap>
            <FilterPanel
              selectToggle={handleSelectType}
              selectedType={selectedType}
              selectedCategory={selectedCategory}
              changeChecked={handleChangeChecked}
              selectedPrice={selectedPrice}
              changedPrice={handleChangePrice}
              setCountry={setCountry}
              country={country}
              region={region}
              setRegion={setRegion}
            />
          </HomePanalWrap>
          <ListWrap>
            <ListComponent list={list} />
          </ListWrap>
        </HomePanalListWrap>
      </ContentHolder>
    </div>
  );
}

export default SeekerJobs;
