import React, { useState } from "react";
import FilterCarousel from "../../map/components/FilterCarousel";
import SearchBar from "./Search";
import { View, SafeAreaView } from "react-native";
import { styles } from "./HeaderStyle";
const Header = ({ setSearchText }) => {
  return (
    //iosen saferaeaview bug
    <SafeAreaView style={styles.header}>
      <SearchBar onSearch={setSearchText} />
      <FilterCarousel />
    </SafeAreaView>
  );
};

export default Header;
