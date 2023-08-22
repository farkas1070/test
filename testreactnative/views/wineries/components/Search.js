import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { I18nContext } from "../../../context/GlobalContext";
import { styles } from "./SearchStyle";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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
        <MenuIcon width={30} height={30} />
      </TouchableOpacity>
      <View style={styles.searchbarcontainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#A8A8A8" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          placeholder={i18n.t("search")}
          placeholderTextColor="#A8A8A8"
          value={searchText}
        />
      </View>
    </View>
  );
};

export default SearchBar;
