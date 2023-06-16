import { Text, View, ScrollView, Image, TextInput, Button } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import {styles} from "./SearchStyle"

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");
  
    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        onSearch(searchText);
      }, 500);
  
      return () => clearTimeout(delayDebounceFn);
    }, [searchText]);
  
    const handleSearch = (text) => {
      setSearchText(text);
    };
  
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          placeholder="Search..."
          value={searchText}
        />
      </View>
    );
  };

export default SearchBar
