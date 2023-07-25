import React, { useState } from "react";
import FilterCarousel from "../../map/components/FilterCarousel";
import SearchBar from "./Search";
import { View } from "react-native";
import {styles} from "./HeaderStyle"
import { SafeAreaView } from 'react-native-safe-area-context'
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
