import React, { useState } from "react";
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

function SeekerJobs() {
  const [selectedType, setSelectedType] = useState(null);
  const handleSelectType = (event, value) => {
    return !value ? null : setSelectedType(value);
  };
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const selectCategoryToggle = (event, value) => {
  //   console.log(value.props.value);
  //   return !value ? null : setSelectedCategory(value.props.value);
  // };

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
      label: "Russia",
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
  return (
    <div id="jobs">
      <ContentHolder>
        <SearchBar />
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
