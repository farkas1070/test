import React, { useState } from "react";
import FilterCarousel from "../../map/components/FilterCarousel";
import SearchBar from "./Search";

const Header = ({ setSearchText }) => {
  return (
    <React.Fragment>
      <SearchBar onSearch={setSearchText} />
      <FilterCarousel />
    </React.Fragment>
  );
};

export default Header;
