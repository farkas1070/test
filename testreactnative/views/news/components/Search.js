import { Text, View, ScrollView, Image, TextInput, Button } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { styles } from "./SearchStyle";
import { I18nContext } from "../../../context/GlobalContext";

const SearchBar = ({ onSearch }) => {
  const [i18n] = React.useContext(I18nContext);
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
        placeholder={i18n.t("search")}
        value={searchText}
      />
    </View>
  );
};

export default SearchBar;
