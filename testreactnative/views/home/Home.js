import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import I18nProvider from "../../lang/LanguageManager";

const Home = () => {
  const i18n = I18nProvider();
  const changeLang = async () => {
    
  };
  return (
    <View>
      <TouchableOpacity onPress={()=>{changeLang()}}><Text>Chnagle language</Text></TouchableOpacity>
      <Text>**Kurva jol kinezo home screen**</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
