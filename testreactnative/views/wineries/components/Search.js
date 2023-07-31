import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { I18nContext } from "../../../context/GlobalContext";
import { styles } from "./SearchStyle";
import { useNavigation } from "@react-navigation/native";
import MenuIcon from "../../../assets/menuassets/Menu";

const SearchBar = ({ onSearch }) => {
  const [i18n] = React.useContext(I18nContext);
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

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
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <MenuIcon width={24} height={24} />
      </TouchableOpacity>
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
